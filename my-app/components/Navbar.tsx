"use client";

import * as React from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useTheme } from "@/app/themeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur shadow-sm ${
        isDark
          ? "bg-black/80 border-gray-700"
          : "bg-white/95 border-gray-200"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Navigation Menu */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex-wrap justify-center gap-6 md:gap-12">

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={`text-lg md:text-xl font-semibold px-4 py-2 transition-colors ${
                        isDark
                          ? "text-gray-100 hover:text-blue-400"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/projects"
                      className={`text-lg md:text-xl font-semibold px-4 py-2 transition-colors ${
                        isDark
                          ? "text-gray-100 hover:text-blue-400"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      Projects & Experiences
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/hobbies"
                      className={`text-lg md:text-xl font-semibold px-4 py-2 transition-colors ${
                        isDark
                          ? "text-gray-100 hover:text-blue-400"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      Extracurriculars & Hobbies
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/game"
                      className={`text-lg md:text-xl font-semibold px-4 py-2 transition-colors ${
                        isDark
                          ? "text-gray-100 hover:text-blue-400"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      Mini Ball
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/leaderboard"
                      className={`text-lg md:text-xl font-semibold px-4 py-2 transition-colors ${
                        isDark
                          ? "text-gray-100 hover:text-blue-400"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      Leaderboard
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contacts"
                      className={`text-lg md:text-xl font-semibold px-4 py-2 transition-colors ${
                        isDark
                          ? "text-gray-100 hover:text-blue-400"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      Contacts
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}