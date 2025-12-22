"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trophy, Medal, Award, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";

// AWS API endpoint 
const API_URL = 'https:/2sw64lg7z2.execute-api.us-east-1.amazonaws.com/prod/leaderboard';

interface LeaderboardEntry {
  playerId: string;
  playerName: string;
  score: number;
  timestamp: string;
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [userRank, setUserRank] = useState<number | null>(null);

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
      }
      
      const data: LeaderboardEntry[] = await response.json();
      
      // Sort by score descending
      const sortedData = data.sort((a, b) => b.score - a.score);
      setLeaderboard(sortedData);
      
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
      setError('Failed to load leaderboard. Please check your AWS configuration and try again.');
      setLeaderboard([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Find user's rank
  const findUserRank = (name: string) => {
    if (!name.trim()) {
      setUserRank(null);
      return;
    }

    const index = leaderboard.findIndex(
      entry => entry.playerName.toLowerCase() === name.toLowerCase().trim()
    );

    setUserRank(index !== -1 ? index + 1 : null);
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  useEffect(() => {
    if (searchName) {
      findUserRank(searchName);
    } else {
      setUserRank(null);
    }
  }, [searchName, leaderboard]);

  // Get medal emoji for top 3
  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return null;
  };

  // Get rank icon component
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-orange-500" />;
    return null;
  };

  // Format date
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Display top 10 or all
  const displayedLeaderboard = showAll ? leaderboard : leaderboard.slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 flex items-center justify-center gap-3">
            <Trophy className="w-12 h-12 text-yellow-500" />
            Leaderboard
          </h1>
          <p className="text-xl text-gray-600">
            Top players from around the world
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/game">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Play Game 🏀
              </Button>
            </Link>
            <Button
              onClick={fetchLeaderboard}
              variant="outline"
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Search for your rank */}
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Find Your Rank
          </h3>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          {userRank && (
            <div className="mt-4 p-4 bg-white rounded-lg border-2 border-blue-500">
              <p className="text-lg font-semibold text-gray-800">
                🎯 You're ranked #{userRank} out of {leaderboard.length} players!
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Score: {leaderboard[userRank - 1]?.score} points
              </p>
            </div>
          )}
          {searchName && !userRank && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-600">
                No player found with that name. Play a game to get on the leaderboard!
              </p>
            </div>
          )}
        </Card>

        {/* Loading state */}
        {isLoading && (
          <Card className="p-12 text-center">
            <RefreshCw className="w-12 h-12 mx-auto mb-4 animate-spin text-blue-500" />
            <p className="text-gray-600">Loading leaderboard...</p>
          </Card>
        )}

        {/* Error state */}
        {error && !isLoading && (
          <Card className="p-8 text-center bg-red-50">
            <p className="text-red-600 font-semibold mb-2">{error}</p>
            <p className="text-sm text-gray-600 mb-4">
              Make sure your AWS API Gateway URL is configured correctly in the code.
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={fetchLeaderboard} variant="outline">
                Try Again
              </Button>
              <Link href="/game">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Play Game Anyway
                </Button>
              </Link>
            </div>
          </Card>
        )}

        {/* Leaderboard table */}
        {!isLoading && leaderboard.length > 0 && (
          <>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Player</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Score</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {displayedLeaderboard.map((entry, index) => {
                      const rank = index + 1;
                      const isTopThree = rank <= 3;
                      const isSearchedUser = searchName && 
                        entry.playerName.toLowerCase() === searchName.toLowerCase().trim();

                      return (
                        <tr
                          key={entry.playerId}
                          className={`
                            transition-colors
                            ${isTopThree ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : 'hover:bg-gray-50'}
                            ${isSearchedUser ? 'bg-blue-100 border-l-4 border-blue-500' : ''}
                          `}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {getRankIcon(rank)}
                              <span className={`text-lg font-bold ${isTopThree ? 'text-orange-600' : 'text-gray-700'}`}>
                                {getMedalEmoji(rank)} #{rank}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`font-semibold ${isTopThree ? 'text-lg' : ''} ${isSearchedUser ? 'text-blue-700' : 'text-gray-900'}`}>
                              {entry.playerName}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className={`text-2xl font-bold ${isTopThree ? 'text-orange-600' : 'text-gray-900'}`}>
                              {entry.score}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-sm text-gray-600">
                            {formatDate(entry.timestamp)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Show more/less button */}
            {leaderboard.length > 10 && (
              <div className="text-center">
                <Button
                  onClick={() => setShowAll(!showAll)}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  {showAll ? (
                    <>
                      Show Top 10 Only
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show All {leaderboard.length} Players
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Stats */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                📊 Leaderboard Stats
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {leaderboard.length}
                  </div>
                  <div className="text-sm text-gray-600">Total Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {leaderboard[0]?.score || 0}
                  </div>
                  <div className="text-sm text-gray-600">High Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">
                    {Math.round(
                      leaderboard.reduce((sum, entry) => sum + entry.score, 0) / 
                      leaderboard.length
                    ) || 0}
                  </div>
                  <div className="text-sm text-gray-600">Avg Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {leaderboard[0]?.playerName?.substring(0, 10) || 'N/A'}
                  </div>
                  <div className="text-sm text-gray-600">Top Player</div>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* Empty state */}
        {!isLoading && !error && leaderboard.length === 0 && (
          <Card className="p-12 text-center">
            <div className="text-6xl mb-4">🏀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Scores Yet!
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to set a score on the leaderboard
            </p>
            <Link href="/game">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Play Now
              </Button>
            </Link>
          </Card>
        )}
      </div>
    </div>
  );
}