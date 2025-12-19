// Mini Ball Game Page

// Import the BasketballGame component from the components directory
import BasketballGame from "@/components/BasketballGame";

// Call the BasketballGame component to display the game
export default function GamePage() {
  return (
    <div className="min-h-screen">
      <BasketballGame />
    </div>
  );
}