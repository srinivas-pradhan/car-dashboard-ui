'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { DM_Sans } from "next/font/google";


const Sidebar = () => {
    const router = useRouter()
    return (
        <div className="fixed w-1/5 left-0 top-0 h-screen bg-white z-10 border-r-2 border-black border-opacity-10">
            <div className="pl-10 pt-16">
                <ul onClick = {() => router.push('/')} className="flex flex-row gap-4">
                    <li>
                        <Image 
                            className="rounded-lg cursor-pointer -mt-0.5"
                            height="37"
                            width="37"
                            alt="Avatar"
                            src="/logo.svg"
                        />
                    </li>
                    <li className="font-bold text-3xl cursor-pointer">
                        Motiv.
                    </li>
                </ul>
            </div>
            <ul className="pt-16 ml-8 mr-10 space-y-0.5 text-gray-400 text-lg">
                <li onClick = {() => router.push('/')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer mt-1"
                                height="20"
                                width="20"
                                alt="Dashboard"
                                src="/dashboard_icon.png"
                            />
                        </li>
                        <li>Dashboard</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/assets')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer"
                                height="25"
                                width="25"
                                alt="Assets"
                                src="/Assets.png"
                            />
                        </li>
                        <li>Assets</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/bookings')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer mt-1"
                                height="25"
                                width="25"
                                alt="Booking"
                                src="/Booking.png"
                            />
                        </li>
                        <li>Booking</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/sell')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer"
                                height="25"
                                width="25"
                                alt="SellCars"
                                src="/SellCars.png"
                            />
                        </li>
                        <li>Sell Cars</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/buy')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer"
                                height="25"
                                width="25"
                                alt="BuyCars"
                                src="/BuyCars.png"
                            />
                        </li>
                        <li>Buy Cars</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/services')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer mt-0.5"
                                height="25"
                                width="25"
                                alt="Services"
                                src="/Services.png"
                            />
                        </li>
                        <li>Services</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/calendar')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer"
                                height="25"
                                width="25"
                                alt="Calendar"
                                src="/Calendar.png"
                            />
                        </li>
                        <li>Calendar</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/messages')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer mt-0.5"
                                height="25"
                                width="25"
                                alt="Messages"
                                src="/Messages.png"
                            />
                        </li>
                        <li>Messages</li>
                    </ul>
                </li>

            </ul>
            <div className="">

            </div>
            <ul className="
                fixed 
                bottom-0 
                ml-8 
                mr-10 
                mb-6 
                space-y-2
            ">
                <li className="p-2 
                    rounded-lg
                    cursor-pointer
                    text-gray-400
                    hover:text-gray-500
                    text-lg
                ">
                    <ul onClick = {() => router.push('/settings')} className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer mt-0.5"
                                height="25"
                                width="25"
                                alt="Settings"
                                src="/Settings.png"
                            />
                        </li>
                        <li>Settings</li>
                    </ul>
                </li>
                <li className="p-2 
                    rounded-lg
                    cursor-pointer
                    text-gray-400
                    hover:text-gray-500
                    text-lg
                ">
                    <ul onClick = {() => router.push('/')} className="flex flex-row gap-2">
                        <li>
                            <Image 
                                className="rounded-lg cursor-pointer mt-0.5"
                                height="25"
                                width="25"
                                alt="Logout"
                                src="/Logout.png"
                            />
                        </li>
                        <li>Log out</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar;
