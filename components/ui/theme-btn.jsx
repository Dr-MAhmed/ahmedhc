"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center" // Keep dropdown centered below the button
        side="bottom" // Show below the button
        sideOffset={8} // Add a little spacing between the button and menu
        className={cn(
          "w-48 origin-top-center rounded-md bg-white p-2 shadow-md dark:bg-gray-800",
          "animate-slide-down absolute z-50" // Updated z-index for better stacking
        )}
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
         <span className="hover:text-blue-500 cursor-pointer">Light</span> 
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
        <span className="hover:text-blue-500 cursor-pointer">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
        <span className="hover:text-blue-500 cursor-pointer">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
