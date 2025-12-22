// Mini basketball game with a power meter and score tracking
// Made with React and Canvas API
"use client";

// React and UI imports
import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

// Set up types and constants
type GameState = "start" | "countdown" | "playing" | "ended";

// Ball properties
interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  active: boolean;
  rolling: boolean;
}

// Physics constants
const GRAVITY = 0.5;
const BOUNCE_DAMPING = 0.35;
const BACKBOARD_DAMPING = 0.15;
const FRICTION = 0.98;
const ROLLING_SPEED = 3.5;

const API_URL = 'https:/2sw64lg7z2.execute-api.us-east-1.amazonaws.com/prod/leaderboard';

export default function BasketballGame() {
  // Animation and game state refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const hasScoredRef = useRef(false);
  const meterAnimationRef = useRef<number | null>(null);
  const shotResultTimeoutRef = useRef<number | null>(null);

  // React state variables
  const [gameState, setGameState] = useState<GameState>("start");
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 650 });
  const [meterValue, setMeterValue] = useState(50); // 0-100, 50 is perfect
  const [meterDirection, setMeterDirection] = useState(1); // 1 or -1
  const [shotResult, setShotResult] = useState<"good" | "miss" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Ball state
  const [ball, setBall] = useState<Ball>({
    x: 100,
    y: 550,
    vx: 0,
    vy: 0,
    radius: 20,
    active: false,
    rolling: false,
  });

  // Hoop and backboard dimensions
  const backboard = { x: 630, y: 130, width: 90, height: 120 };
  const rim = { x: 550, y: 200, width: 100, height: 10 };
  const hoop = { x: 560, y: 210, width: 80, height: 20 };

  // Submit score to AWS
  const submitScore = async () => {
    if (!playerName.trim()) {
      setSubmitMessage("Please enter your name to save your score!");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          playerName: playerName.trim(), 
          score 
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit score');
      }
      
      const data = await response.json();
      setSubmitMessage(`Score submitted successfully! 🎉 View the leaderboard to see your rank.`);
      
    } catch (error) {
      console.error('Error submitting score:', error);
      setSubmitMessage('Error submitting score. Please try again or check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Canvas resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const container = canvas.parentElement;
      if (container) {
        const newWidth = Math.min(800, container.clientWidth - 40);
        const newHeight = 650;
        setCanvasSize({ width: newWidth, height: newHeight });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Countdown before game starts
  useEffect(() => {
    if (gameState !== "countdown") return;

    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c === 1) {
          clearInterval(interval);
          setGameState("playing");
        }
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

  // Game timer
  useEffect(() => {
    if (gameState !== "playing") return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setGameState("ended");
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  // Power meter animation
  useEffect(() => {
    if (gameState !== "playing" || ball.active || ball.rolling) {
      if (meterAnimationRef.current) {
        cancelAnimationFrame(meterAnimationRef.current);
        meterAnimationRef.current = null;
      }
      return;
    }

    const animateMeter = () => {
      setMeterValue((prev) => {
        let newValue = prev + meterDirection * 2;
        
        if (newValue >= 100) {
          setMeterDirection(-1);
          newValue = 100;
        } else if (newValue <= 0) {
          setMeterDirection(1);
          newValue = 0;
        }
        
        return newValue;
      });

      meterAnimationRef.current = requestAnimationFrame(animateMeter);
    };

    meterAnimationRef.current = requestAnimationFrame(animateMeter);

    return () => {
      if (meterAnimationRef.current) {
        cancelAnimationFrame(meterAnimationRef.current);
      }
    };
  }, [gameState, ball.active, ball.rolling, meterDirection]);

  // Backboard collision detection
  const checkBackboardCollision = (x: number, y: number, radius: number, vx: number, vy: number) => {
    const ballRight = x + radius;
    const ballLeft = x - radius;
    const ballTop = y - radius;
    const ballBottom = y + radius;

    const backboardLeft = backboard.x;
    const backboardRight = backboard.x + backboard.width;
    const backboardTop = backboard.y;
    const backboardBottom = backboard.y + backboard.height;

    if (
      ballRight >= backboardLeft &&
      ballLeft <= backboardLeft + 5 &&
      ballBottom >= backboardTop &&
      ballTop <= backboardBottom &&
      vx > 0
    ) {
      return {
        collision: true,
        newX: backboardLeft - radius,
        newVx: -Math.abs(vx) * BACKBOARD_DAMPING,
        newVy: vy * BACKBOARD_DAMPING,
      };
    }

    if (
      ballBottom >= backboardTop &&
      ballTop <= backboardTop + 5 &&
      ballRight >= backboardLeft &&
      ballLeft <= backboardRight &&
      vy > 0
    ) {
      return {
        collision: true,
        newY: backboardTop - radius,
        newVx: vx * BACKBOARD_DAMPING,
        newVy: -Math.abs(vy) * BACKBOARD_DAMPING,
      };
    }

    if (
      ballTop <= backboardBottom &&
      ballBottom >= backboardBottom - 5 &&
      ballRight >= backboardLeft &&
      ballLeft <= backboardRight &&
      vy < 0
    ) {
      return {
        collision: true,
        newY: backboardBottom + radius,
        newVx: vx * BACKBOARD_DAMPING,
        newVy: Math.abs(vy) * BACKBOARD_DAMPING,
      };
    }

    return { collision: false };
  };

  // Update ball position and handle physics
  const updateBallPosition = useCallback(() => {
    setBall((prevBall) => {
      if (!prevBall.active && !prevBall.rolling) return prevBall;

      let { x, y, vx, vy, radius, rolling } = prevBall;

      if (rolling) {
        x -= ROLLING_SPEED;
        
        if (x <= 100) {
          setShotResult(null);
          return {
            ...prevBall,
            x: 100,
            y: canvasSize.height - 60 - radius,
            vx: 0,
            vy: 0,
            active: false,
            rolling: false,
          };
        }
        
        return {
          ...prevBall,
          x,
        };
      }

      vy += GRAVITY;
      vx *= FRICTION;

      let newX = x + vx;
      let newY = y + vy;
      let newVx = vx;
      let newVy = vy;

      const backboardResult = checkBackboardCollision(newX, newY, radius, newVx, newVy);
      if (backboardResult.collision) {
        if (backboardResult.newX !== undefined) {
          newX = backboardResult.newX;
          newVx = backboardResult.newVx!;
        }
        if (backboardResult.newY !== undefined) {
          newY = backboardResult.newY;
          newVy = backboardResult.newVy!;
        }
        
        // If ball stops on backboard, make it fall
        if (Math.abs(newVx) < 0.5 && Math.abs(newVy) < 0.5) {
          newVx = -1; // Push it away from backboard
          newVy = 2;  // Make it fall
        }
      }

      if (newX - radius <= 0) {
        newX = radius;
        newVx = Math.abs(vx) * BOUNCE_DAMPING;
      } else if (newX + radius >= canvasSize.width) {
        newX = canvasSize.width - radius;
        newVx = -Math.abs(vx) * BOUNCE_DAMPING;
      }

      if (newY - radius <= 0) {
        newY = radius;
        newVy = Math.abs(vy) * BOUNCE_DAMPING;
      } else if (newY + radius >= canvasSize.height - 50) {
        newY = canvasSize.height - 50 - radius;
        newVy = -Math.abs(vy) * BOUNCE_DAMPING;
        newVx *= 0.8;
        
        if (Math.abs(newVy) < 1.5 && Math.abs(newVx) < 2) {
          // Show miss message if haven't scored
          if (!hasScoredRef.current && shotResult === null) {
            setShotResult("miss");
            if (shotResultTimeoutRef.current) {
              clearTimeout(shotResultTimeoutRef.current);
            }
            shotResultTimeoutRef.current = window.setTimeout(() => {
              setShotResult(null);
            }, 2000);
          }

          if (newX > 100) {
            return {
              ...prevBall,
              x: newX,
              y: newY,
              vx: 0,
              vy: 0,
              active: false,
              rolling: true,
            };
          } else {
            return {
              ...prevBall,
              x: newX,
              y: newY,
              vx: 0,
              vy: 0,
              active: false,
              rolling: false,
            };
          }
        }
      }

      if (
        !hasScoredRef.current &&
        y - radius < hoop.y &&
        newY - radius >= hoop.y &&
        newX > hoop.x &&
        newX < hoop.x + hoop.width &&
        newVy > 0
      ) {
        hasScoredRef.current = true;
        setScore((s) => s + 1);
        setShotResult("good");
        if (shotResultTimeoutRef.current) {
          clearTimeout(shotResultTimeoutRef.current);
        }
        shotResultTimeoutRef.current = window.setTimeout(() => {
          setShotResult(null);
        }, 2000);
      }

      if (newY > hoop.y + 100) {
        hasScoredRef.current = false;
      }

      return {
        ...prevBall,
        x: newX,
        y: newY,
        vx: newVx,
        vy: newVy,
      };
    });
  }, [canvasSize.width, canvasSize.height, shotResult]);

  // Draw the game elements
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#87CEEB");
    gradient.addColorStop(1, "#E0F6FF");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#8B7355";
    ctx.fillRect(0, canvas.height - 60, canvas.width, 60);

    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 4;
    ctx.fillRect(backboard.x, backboard.y, backboard.width, backboard.height);
    ctx.strokeRect(backboard.x, backboard.y, backboard.width, backboard.height);

    ctx.strokeStyle = "#666666";
    ctx.lineWidth = 2;
    ctx.strokeRect(
      backboard.x + 15,
      backboard.y + 20,
      backboard.width - 30,
      backboard.height - 40
    );

    ctx.fillStyle = "#FF4500";
    ctx.fillRect(rim.x, rim.y, rim.width, rim.height);
    ctx.strokeStyle = "#CC3700";
    ctx.lineWidth = 2;
    ctx.strokeRect(rim.x, rim.y, rim.width, rim.height);

    ctx.beginPath();
    ctx.ellipse(
      hoop.x + hoop.width / 2,
      hoop.y + hoop.height / 2,
      hoop.width / 2,
      hoop.height / 2,
      0,
      0,
      Math.PI * 2
    );
    ctx.strokeStyle = "#FF4500";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    for (let i = 0; i < 7; i++) {
      const startX = hoop.x + 10 + (i * (hoop.width - 20) / 6);
      ctx.beginPath();
      ctx.moveTo(startX, hoop.y + 10);
      ctx.lineTo(startX + 3, hoop.y + 50);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#FF8C00";
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius * 0.7, 0, Math.PI * 2);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(ball.x - ball.radius, ball.y);
    ctx.lineTo(ball.x + ball.radius, ball.y);
    ctx.stroke();
  }, [ball]);

  // Game animation loop
  useEffect(() => {
    if (gameState !== "playing") {
      draw();
      return;
    }

    const animate = () => {
      updateBallPosition();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState, updateBallPosition, draw]);

  // Shooting handler
  // When clicked, the ball is shot towards the hoop with arc
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (gameState !== "playing") return;
    if (ball.active || ball.rolling) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    const dx = clickX - ball.x;
    const dy = clickY - ball.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < ball.radius + 30) {
      const targetX = hoop.x + hoop.width / 2;
      const targetY = hoop.y;

      const deltaX = targetX - ball.x;
      const deltaY = targetY - ball.y;

      // Calculate power based on meter value
      // 50 is perfect (green zone: 25-75, which is 50% of the range)
      // 0-25 is too low (red), 75-100 is too high (red)
      // Upper red (75-100) should hit top of backboard
      // Lower red (0-25) should be too weak
      let powerMultiplier;
      
      if (meterValue >= 75) {
        // Upper red zone - too high, hits backboard top
        powerMultiplier = 1.8 + ((meterValue - 75) / 25) * 0.4; // Range: 1.8 to 2.2
      } else if (meterValue <= 25) {
        // Lower red zone - too low, weak shot
        powerMultiplier = 0.25 + (meterValue / 25) * 0.35; // Range: 0.25 to 0.6
      } else {
        // Green zone - perfect trajectory
        powerMultiplier = 0.6 + ((meterValue - 25) / 50) * 1.2; // Range: 0.6 to 1.8
      }

      setBall((b) => ({
        ...b,
        vx: deltaX * 0.04,
        vy: (deltaY * 0.04 - 6.45) * powerMultiplier,
        active: true,
        rolling: false,
      }));

      hasScoredRef.current = false;
      setShotResult(null);
    }
  };

  // Start game handler
  const startGame = () => {
    setGameState("countdown");
    setScore(0);
    setTimeLeft(60);
    setBall({
      x: 100,
      y: 550,
      vx: 0,
      vy: 0,
      radius: 20,
      active: false,
      rolling: false,
    });
    hasScoredRef.current = false;
    setShotResult(null);
  };

  // Play again handler
  const playAgain = () => {
    setGameState("start");
    setScore(0);
    setBall({
      x: 100,
      y: 550,
      vx: 0,
      vy: 0,
      radius: 20,
      active: false,
      rolling: false,
    });
    hasScoredRef.current = false;
    setShotResult(null);
  };

  // Save score (mock implementation)
  const saveScore = async () => {
    if (!playerName.trim()) {
      alert("Please enter your name to save your score!");
      return;
    }

    try {
      const scoreData = {
        name: playerName,
        score: score,
        timestamp: new Date().toISOString(),
      };

      alert(`Score saved! ${playerName}: ${score} points`);
    } catch (error) {
      console.error("Error saving score:", error);
      alert("Failed to save score. Please try again.");
    }
  };

  // Meter color based on value
  const getMeterColor = () => {
    if (meterValue >= 25 && meterValue <= 75) return "#22c55e"; // Green (50%)
    return "#ef4444"; // Red (25% each side)
  };

  // UI Rendering
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            🏀 Mini Ball
          </h1>
          <p className="text-xl text-gray-600">
            Click the ball when the meter is green!
          </p>
        </div>

        {gameState === "start" && (
          <Card className="p-12 text-center space-y-6 bg-gradient-to-br from-orange-50 to-white">
            <div className="text-8xl mb-6">🏀</div>
            <h2 className="text-3xl font-bold text-gray-900">Ready to Play?</h2>
            <p className="text-lg text-gray-600">
              Watch the power meter and click when it's in the green zone!
              <br />
              Score as many points as you can in 60 seconds.
            </p>
            <div className="space-y-4 pt-4">
              <Input
                type="text"
                placeholder="Enter your name (optional)"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="max-w-xs mx-auto text-center text-lg"
              />
              <Button
                onClick={startGame}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6"
              >
                Play Game
              </Button>
            </div>
          </Card>
        )}

        {gameState === "countdown" && (
          <Card className="p-24 text-center bg-gradient-to-br from-blue-50 to-white">
            <div className="text-9xl font-bold text-blue-600 animate-pulse">
              {countdown > 0 ? countdown : "GO!"}
            </div>
          </Card>
        )}

        {gameState === "playing" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">{score}</div>
                <div className="text-sm text-gray-600">SCORE</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">
                  {timeLeft}s
                </div>
                <div className="text-sm text-gray-600">TIME LEFT</div>
              </div>
            </div>

            {/* Power Meter */}
            {!ball.active && !ball.rolling && (
              <Card className="p-6 bg-white">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Power Meter</h3>
                  <p className="text-sm text-gray-600">Click when in the green zone!</p>
                </div>
                <div className="relative w-full max-w-md mx-auto">
                  <svg width="100%" height="120" viewBox="0 0 200 120">
                    {/* Red zone - too low (25%) */}
                    <path
                      d="M 20 100 A 80 80 0 0 1 55 42"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Green zone - perfect (50%) */}
                    <path
                      d="M 55 42 A 80 80 0 0 1 145 42"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Red zone - too high (25%) */}
                    <path
                      d="M 145 42 A 80 80 0 0 1 180 100"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    
                    {/* Meter needle */}
                    <g transform={`rotate(${-90 + (meterValue / 100) * 180} 100 100)`}>
                      <line
                        x1="100"
                        y1="100"
                        x2="100"
                        y2="30"
                        stroke={getMeterColor()}
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle cx="100" cy="30" r="6" fill={getMeterColor()} />
                    </g>
                    
                    {/* Center circle */}
                    <circle cx="100" cy="100" r="8" fill="#374151" />
                  </svg>
                  
                  {/* Labels */}
                  <div className="flex justify-between text-xs text-gray-600 mt-2 px-4">
                    <span>TOO LOW</span>
                    <span className="font-bold text-green-600">PERFECT</span>
                    <span>TOO HIGH</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Shot Result Message */}
            {shotResult && (
              <Card className={`p-6 text-center ${shotResult === "good" ? "bg-green-50" : "bg-red-50"}`}>
                <div className={`text-3xl font-bold ${shotResult === "good" ? "text-green-600" : "text-red-600"}`}>
                  {shotResult === "good" ? "⭐️ Good Shot! ⭐️" : "Yikes! 😅"}
                </div>
              </Card>
            )}

            <Card className="p-4">
              <canvas
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                onClick={handleCanvasClick}
                className="mx-auto cursor-pointer rounded-lg shadow-inner border-2 border-gray-300"
              />
              <p className="text-center mt-4 text-gray-700 font-medium">
                {!ball.active && !ball.rolling ? "Click the basketball to shoot! 🏀" : ""}
              </p>
            </Card>
          </div>
        )}

        {/* Game over screen */}
        {gameState === "ended" && (
          <Card className="p-12 text-center space-y-6 bg-gradient-to-br from-green-50 to-white">
            <h3 className="text-2xl font-semibold text-gray-700">Game Over!</h3>

            <div className="bg-white rounded-lg p-8 shadow-inner">
              <p className="text-2xl text-gray-700 mb-2">
                {playerName}
              </p>
              <div className="text-6xl font-bold text-orange-600 mb-2">
                {score}
              </div>
              <p className="text-xl text-gray-600">Points</p>
            </div>

            {submitMessage ? (
              <div className={`p-4 rounded-lg ${submitMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                <p className="font-semibold">{submitMessage}</p>
              </div>
            ) : (
              <Button
                onClick={submitScore}
                disabled={isSubmitting}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Save Score to Leaderboard'}
              </Button>
            )}

            <div className="flex gap-4 justify-center pt-4">
              <Button
                onClick={playAgain}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8"
              >
                Play Again
              </Button>
              <Link href="/leaderboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                >
                  View Leaderboard 🏆
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}