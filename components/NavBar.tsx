'use client';
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Command, CommandInput } from "@/components/ui/command"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const { setTheme } = useTheme()

    return (
        <div className="
            h-16 
            w-screen 
            right-0
            bg-white 
            dark:bg-gray-600 
            z-10 
            border-r-2 
            dark:border-white 
            border-black 
            border-opacity-10"
            >
            <ul className="flex flex-row justify-end space-x-[40%]">
                <li className="mt-2">
                    <Command className="rounded-lg border w-96 bg-neutral-100 dark:bg-gray-700 dark:text-white">
                        <CommandInput placeholder="Type a command or search..." />
                    </Command>
                </li>
                <li className="mt-4 pr-8">
                    <ul className="flex flex-row items-center gap-8">
                        <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="h-9 bg-neutral-100 dark:bg-gray-700 dark:text-white focus:outline-none" variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </li>
                        <li>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;
