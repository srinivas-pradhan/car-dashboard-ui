'use client';
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Command, CommandInput } from "@/components/ui/command"

const Navbar = () => {
    return (
        <div className="
            h-16 
            w-screen 
            right-0
            bg-white 
            dark:bg-gray-600 
            z-10 border-r-2 
            dark:border-white 
            border-black 
            border-opacity-10"
            >
            <ul className="flex flex-row justify-end space-x-[40%]">
                <li className="mt-2">
                    <Command className="rounded-lg border shadow-md w-96 bg-neutral-100 dark:bg-gray-700 dark:text-white">
                        <CommandInput placeholder="Type a command or search..." />
                    </Command>
                </li>
                <li className="mt-4 pr-8">
                    <ul className="flex flex-row items-center gap-8">
                        <li>Item 1</li>
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
