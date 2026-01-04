// Mini Ball Game Page
"use client";

import BasketballGame from "@/components/BasketballGame";
import { useTheme } from "@/app/themeContext";

export default function GamePage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors ${
      theme === "dark" ? "bg-gray-900" : "bg-white"
    }`}>
      <BasketballGame />
    </div>
  );
}