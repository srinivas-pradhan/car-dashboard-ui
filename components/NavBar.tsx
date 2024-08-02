'use client';
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="h-16 w-screen bg-white right-0">
            <ul className="flex flex-row justify-end md:space-x-[66%]">
                <li className="mt-5">SearchBar</li>
                <li className="mt-5 pr-8">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;
