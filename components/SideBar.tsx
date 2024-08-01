'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';


const Sidebar = () => {
    const router = useRouter()
    return (
        <div className="fixed w-1/5 left-0 top-0 h-screen bg-white dark:bg-gray-600 z-10 border-r-2 dark:border-white border-black border-opacity-10">
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
                    <li className="dark:text-white font-bold text-3xl cursor-pointer">
                        Motiv.
                    </li>
                </ul>
            </div>
            <ul className="pt-16 ml-8 mr-10 space-y-0.5 text-gray-400 dark:text-slate-200 text-lg">
                <li onClick = {() => router.push('/')} className="p-3 rounded-lg dark:hover:bg-slate-100 dark:hover:text-gray-600 hover:text-gray-500 hover:bg-slate-400 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/>
                            </svg>
                        </li>
                        <li>Dashboard</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/assets')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-gray-600 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
                            </svg>
                        </li>
                        <li>Assets</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/bookings')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-gray-600 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M260-320q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm360 0q20 0 36-12t21-31q-20-4-38-13.5T606-401l-25-25q-10 8-15.5 20t-5.5 26q0 25 17.5 42.5T620-320Zm-460 40v-200 200Zm40 80v40q0 17-11.5 28.5T160-120h-40q-17 0-28.5-11.5T80-160v-320l84-240q6-18 21.5-29t34.5-11h140v55q0 6 .5 12.5T362-680H234l-42 120h255l80 80H160v200h560v-81q22-2 42.5-11t37.5-25v237q0 17-11.5 28.5T760-120h-40q-17 0-28.5-11.5T680-160v-40H200Zm400-520q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Zm62 262L458-662q-8-8-13-19.5t-5-23.5v-155q0-25 17.5-42.5T500-920h155q12 0 23.5 5t19.5 13l204 204q17 17 17 42.5T902-613L747-458q-17 17-42.5 17T662-458Zm43-70 127-127-185-185H520v127l185 185Zm-29-156Z"/>
                            </svg>
                        </li>
                        <li>Booking</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/sell')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-gray-600 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/>
                            </svg>
                        </li>
                        <li>Sell Cars</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/buy')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-gray-600 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                            </svg>
                        </li>
                        <li>Buy Cars</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/services')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-gray-600 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current -rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M760-120 480-400l-94 94q8 15 11 32t3 34q0 66-47 113T240-80q-66 0-113-47T80-240q0-66 47-113t113-47q17 0 34 3t32 11l94-94-94-94q-15 8-32 11t-34 3q-66 0-113-47T80-720q0-66 47-113t113-47q66 0 113 47t47 113q0 17-3 34t-11 32l494 494v40H760ZM600-520l-80-80 240-240h120v40L600-520ZM240-640q33 0 56.5-23.5T320-720q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720q0 33 23.5 56.5T240-640Zm240 180q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM240-160q33 0 56.5-23.5T320-240q0-33-23.5-56.5T240-320q-33 0-56.5 23.5T160-240q0 33 23.5 56.5T240-160Z"/>
                            </svg>
                        </li>
                        <li>Services</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/calendar')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-gray-600 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm80 240v-80h400v80H280Zm0 160v-80h280v80H280Z"/>
                            </svg>
                        </li>
                        <li>Calendar</li>
                    </ul>
                </li>
                <li onClick = {() => router.push('/messages')} className="p-3 rounded-lg hover:text-gray-500 hover:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-gray-600 hover:bg-opacity-20 cursor-pointer">
                    <ul className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-4q-37-8-67.5-27.5T600-720H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v360q0 33-23.5 56.5T800-240H240L80-80Zm80-720v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
                            </svg>
                        </li>
                        <li>Messages</li>
                    </ul>
                </li>

            </ul>
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
                    dark:text-gray-300
                    dark:hover:text-gray-100
                    text-lg
                ">
                    <ul onClick = {() => router.push('/settings')} className="flex flex-row gap-2">
                        <li className="">
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
                            </svg>
                        </li>
                        <li>Settings</li>
                    </ul>
                </li>
                <li className="p-2 
                    rounded-lg
                    cursor-pointer
                    text-gray-400
                    hover:text-gray-500
                    dark:text-gray-300
                    dark:hover:text-gray-100
                    text-lg
                ">
                    <ul onClick = {() => router.push('/')} className="flex flex-row gap-2">
                        <li>
                            <svg className="rounded-lg cursor-pointer mt-0.5 fill-current scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                        </li>
                        <li>Log out</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar;
