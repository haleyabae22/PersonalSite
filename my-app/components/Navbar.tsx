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
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors">
                    Projects & Experiences
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/hobbies" legacyBehavior passHref>
                  <NavigationMenuLink className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors">
                    Extracurriculars
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/game" legacyBehavior passHref>
                  <NavigationMenuLink className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors">
                    Mini Basketball
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/leaderboard" legacyBehavior passHref>
                  <NavigationMenuLink className="text-lg md:text-xl font-semibold px-4 py-2 hover:text-blue-600 transition-colors">
                    Leaderboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}