"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-24">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap justify-center gap-6 md:gap-12">

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects"
                    className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors"
                  >
                    Projects & Experiences
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/hobbies"
                    className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors"
                  >
                    Extracurriculars
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/game"
                    className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors"
                  >
                    Mini Basketball
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/leaderboard"
                    className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors"
                  >
                    Leaderboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}