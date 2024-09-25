'use client';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useState, useEffect } from "react";
import { useUser } from '@clerk/nextjs'

import Image from 'next/image';


const  GridLayout = () => {
    const { isLoaded, user  } = useUser();
    if (!isLoaded || !user) {
        return null
    }

    const [ apidata, setapiData ] = useState({});
    const [ recomdata, setrecomData ] = useState({});


    useEffect(() => {
        fetch(`/api/dashboard/${user.primaryEmailAddress.emailAddress}/topgrid`)
        .then((res) => res.json())
        .then((apidata) => {
            setapiData(apidata)
        })
    },[])

    useEffect(() => {
        fetch(`/api/dashboard/${user.primaryEmailAddress.emailAddress}/bottomgrid`)
        .then((res) => res.json())
        .then((recomdata) => {
            setrecomData(recomdata)
        })
    },[])
    
    var energy_DS = 251.2 - (251.2 * `${apidata.Energy}`) / 100
    var rangeDS =  251.2 - (251.2 * `${apidata.Range}`) / 100
    var breakfluidDS =  251.2 - (251.2 * `${apidata.BreakFluid}`) / 100
    var tirewearDS =  251.2 - (251.2 * `${apidata.TireRange}`) / 100
    
    return (  
        <div className="pl-[20%] flex justify-center">
            <div>
                <ul className="grid grid-cols-4 ml-10 mr-10 mt-4 gap-x-10 gap-y-6">
                    <li className="
                        bg-white
                        text-black
                        dark:text-neutral-100
                        dark:hover:text-black
                        hover:text-neutral-100
                        dark:bg-tile-gray
                        dark:hover:bg-custom-purple1
                        hover:bg-custom-purple1 
                        hover:opacity-75 
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105 
                        delay-75 
                        duration-500 
                        rounded-xl 
                        w-60 
                        h-48"
                    >
                        <div className="flex justify-center items-center group">
                            <ul className="mt-4 space-y-3 cursor-pointer ">
                                <li className="flex justify-center items-center">
                                    <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                        <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/>
                                    </svg>
                                </li>
                                <li className="text-xl font-bold flex justify-center items-center">
                                    Energy
                                </li>
                                <li className="size-24 flex justify-center items-center">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                        className="text-neutral-100 dark:text-black group-hover:text-custom-purple2 duration-500 stroke-current"
                                        stroke-width="10"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        ></circle>
                                        <circle
                                        className="text-blue-500 group-hover:text-white progress-ring__circle stroke-current"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        stroke-dasharray="251.2" 
                                        stroke-dashoffset={energy_DS}
                                        ></circle>
                                        <text x="50" y="50" className="
                                            text-xl 
                                            font-bold 
                                            group-hover:text-white
                                            group-hover:fill-white
                                            dark:text-white
                                            dark:fill-white
                                            dark:group-hover:text-black 
                                            dark:group-hover:fill-black 
                                            stroke-current 
                                            duration-1000 
                                            fill
                                            " 
                                            text-anchor="middle" 
                                            alignment-baseline="middle"
                                            >
                                                {apidata.Energy}%
                                            </text>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="
                        bg-white
                        text-black
                        dark:text-neutral-100
                        dark:hover:text-black
                        hover:text-neutral-100
                        dark:bg-tile-gray
                        dark:hover:bg-custom-purple1
                        hover:bg-custom-purple1 
                        hover:opacity-75 
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105 
                        delay-75 
                        duration-500 
                        rounded-xl 
                        w-60 
                        h-48"
                    >
                        <div className="flex justify-center items-center group">
                            <ul className=" mt-4 space-y-3">
                                <li className="flex justify-center items-center">
                                    <svg className="rounded-lg cursor-pointer mt-0.5 fill-current rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                        <path d="m680-280-56-56 103-104H520v-80h207L624-624l56-56 200 200-200 200Zm-400 0L80-480l200-200 56 56-103 104h207v80H233l103 104-56 56Z"/>
                                    </svg>
                                </li>                                
                                <li className="text-xl font-bold flex justify-center items-center">
                                    Range
                                </li>
                                <li className="size-24 flex justify-center items-center">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                        className="text-neutral-100 dark:text-black group-hover:text-custom-purple2 duration-500 stroke-current"
                                        stroke-width="10"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        ></circle>
                                        <circle
                                        className="text-red-300 group-hover:text-white progress-ring__circle stroke-current"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        stroke-dasharray="251.2" 
                                        stroke-dashoffset={rangeDS}
                                        ></circle>
                                        <text x="50" y="50" className="
                                            text-xl 
                                            font-bold 
                                            group-hover:text-white
                                            group-hover:fill-white
                                            dark:text-white
                                            dark:fill-white
                                            dark:group-hover:text-black 
                                            dark:group-hover:fill-black 
                                            stroke-current 
                                            duration-1000 
                                            fill
                                            " 
                                            text-anchor="middle" 
                                            alignment-baseline="middle"
                                            >
                                                {apidata.Range}%
                                            </text>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="
                        bg-white
                        text-black
                        dark:text-neutral-100
                        dark:hover:text-black
                        hover:text-neutral-100
                        dark:bg-tile-gray
                        dark:hover:bg-custom-purple1 
                        hover:bg-custom-purple1 
                        hover:opacity-75 
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105 
                        delay-75 
                        duration-500 
                        rounded-xl 
                        w-60 
                        h-48"
                    >
                        <div className="flex justify-center items-center group">
                            <ul className="mt-4 space-y-3">
                                <li className="flex justify-center items-center">
                                    <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                        <path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"/>
                                    </svg>
                                </li>                                
                                <li className="text-xl font-bold flex justify-center items-center">
                                    Break Fluid
                                </li>
                                <li className="size-24 flex justify-center items-center">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                        className="text-neutral-100 dark:text-black group-hover:text-custom-purple2 duration-500 stroke-current"
                                        stroke-width="10"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        ></circle>
                                        <circle
                                        className="text-violet-400 group-hover:text-white progress-ring__circle stroke-current"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        stroke-dasharray="251.2" 
                                        stroke-dashoffset={breakfluidDS}
                                        ></circle>
                                        <text x="50" y="50" className="
                                            text-xl 
                                            font-bold 
                                            group-hover:text-white
                                            group-hover:fill-white
                                            dark:text-white
                                            dark:fill-white
                                            dark:group-hover:text-black 
                                            dark:group-hover:fill-black 
                                            stroke-current 
                                            duration-1000 
                                            fill
                                            " 
                                            text-anchor="middle" 
                                            alignment-baseline="middle"
                                            >
                                                {apidata.BreakFluid}%
                                            </text>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="
                        bg-white
                        text-black
                        dark:text-neutral-100
                        dark:hover:text-black 
                        hover:text-neutral-100
                        dark:bg-tile-gray
                        dark:hover:bg-custom-purple1 
                        hover:bg-custom-purple1 
                        hover:opacity-75 
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105 
                        delay-75 
                        duration-500 
                        rounded-xl 
                        w-60 
                        h-48"
                    >
                        <div className="flex justify-center items-center group">
                            <ul className="mt-4 space-y-3">
                                <li className="flex justify-center items-center">
                                    <svg className="rounded-lg cursor-pointer mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                        <path d="M760-640q-17 0-28.5-11.5T720-680q0-8 3.5-15.5T732-708q12-12 55-27l43-15q-8 23-15 43-6 17-13.5 33T788-652q-5 5-12.5 8.5T760-640ZM160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v327q9-3 19-5t21-2q50 0 85 35t35 85v80q0 17 11.5 28.5T680-200q17 0 28.5-11.5T720-240v-200h-40v-57q-54-23-87-72t-33-111q0-83 58.5-141.5T760-880q83 0 141.5 58.5T960-680q0 62-33 111t-87 72v57h-40v200q0 50-35 85t-85 35q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T520-360q-17 0-28.5 11.5T480-320v120q0 33-23.5 56.5T400-120H160Zm600-440q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM160-200h240v-80l-80 80v-113l80-80v-87l-80 80v-113l80-80v-87l-80 80v-113l47-47H193l47 47v113l-80-80v87l80 80v113l-80-80v87l80 80v113l-80-80v80Zm120-280Z"/>
                                    </svg>
                                </li>                                
                                <li className="text-xl font-bold flex justify-center items-center">
                                    Tire Wear
                                </li>
                                <li className="size-24 flex justify-center items-center">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                        className="text-neutral-100 dark:text-black group-hover:text-custom-purple2 duration-500 stroke-current"
                                        stroke-width="10"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        ></circle>
                                        <circle
                                        className="text-amber-300 group-hover:text-white progress-ring__circle stroke-current"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        stroke-dasharray="251.2" 
                                        stroke-dashoffset={tirewearDS}
                                        ></circle>
                                        <text x="50" y="50" className="
                                            text-xl 
                                            font-bold 
                                            group-hover:text-white
                                            group-hover:fill-white
                                            dark:text-white
                                            dark:fill-white
                                            dark:group-hover:text-black 
                                            dark:group-hover:fill-black 
                                            stroke-current 
                                            duration-1000 
                                            fill
                                            " 
                                            text-anchor="middle" alignment-baseline="middle">
                                            {apidata.TireRange}%
                                        </text>
                                    </svg>
                                </li>
                            </ul>
                            
                        </div>
                    </li>
                    <li className="
                        bg-white
                        dark:bg-tile-gray
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105
                        hover:border-2
                        dark:border-white
                        hover:border-opacity-50
                        hover:border-black
                        delay-75 
                        duration-500 
                        col-span-2 
                        rounded-xl 
                        w-full 
                        h-64"
                    >
                        Text
                    </li>
                    <li className="
                        bg-white
                        dark:bg-tile-gray
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105
                        hover:border-2
                        dark:border-white
                        hover:border-opacity-50
                        hover:border-black
                        delay-75 
                        duration-500 
                        col-span-2 
                        rounded-xl 
                        w-full 
                        h-64"
                    >
                        Text
                    </li>
                </ul>
                <ul className="grid grid-cols-3 ml-10 mr-10 mt-6 gap-x-14">
                    <li className="
                        bg-custom-yellow
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105 
                        delay-75 
                        duration-500 
                        rounded-xl 
                        w-80 
                        h-40"
                    >
                        <div className="flex justify-start">
                            <ul className="flex flex-row ml-10 mt-3 cursor-default">
                                <li className="justify-center items-center">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#475569">
                                        <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/>
                                    </svg>
                                </li>
                                <li className="text-sm flex items-center text-black">
                                    {recomdata?.Cars?.CurrentRecoms[0]?.Recommended}% Recommend
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <Image
                                src={recomdata?.Cars?.CurrentRecoms[0]?.ImageLink}
                                width={170}
                                height={170}
                                alt="Picture of the recommended car."
                            />
                        </div>
                        <div className="font-bold ml-10 text-base text-black">
                            {recomdata?.Cars?.CurrentRecoms[0]?.CarName}
                        </div>
                        <div className="ml-10">
                            <ul className="flex flex-row cursor-default items-center">
                                <li className="">
                                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m600-200-56-57 143-143H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760h20v80h-20q-42 0-71 29t-29 71q0 42 29 71t71 29h387L544-624l56-56 240 240-240 240Z"/>
                                    </svg>
                                </li>
                                <li className="ml-3 text-slate-600 text-xs">
                                    {recomdata?.Cars?.CurrentRecoms[0]?.Share}
                                </li>
                                <li className="ml-3 text-slate-600 text-xs">
                                    <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
                                    </svg>
                                </li>                                
                                <li className="ml-3 text-slate-600 text-xs">
                                    <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/>
                                    </svg>
                                </li>
                                <li className="text-slate-600 text-xs ml-28">
                                    {recomdata?.Cars?.CurrentRecoms[0]?.RentalCost}/h
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="
                        bg-custom-blue 
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105 
                        delay-75 
                        duration-500 
                        rounded-xl 
                        w-80 
                        h-40"
                    >
                        <div className="flex justify-start">
                            <ul className="flex flex-row ml-10 mt-3 cursor-default">
                                <li className="justify-center items-center">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#475569">
                                        <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/>
                                    </svg>
                                </li>
                                <li className="text-sm flex items-center text-black">
                                    {recomdata?.Cars?.CurrentRecoms[1]?.Recommended}% Recommend
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <Image
                                src={recomdata?.Cars?.CurrentRecoms[1]?.ImageLink}
                                width={170}
                                height={170}
                                alt="Picture of the recommended car."
                            />
                        </div>
                        <div className="font-bold ml-10 text-base text-black">
                            {recomdata?.Cars?.CurrentRecoms[1]?.CarName}
                        </div>
                        <div className="ml-10">
                            <ul className="flex flex-row cursor-default items-center">
                                <li className="">
                                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m600-200-56-57 143-143H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760h20v80h-20q-42 0-71 29t-29 71q0 42 29 71t71 29h387L544-624l56-56 240 240-240 240Z"/>
                                    </svg>
                                </li>
                                <li className="ml-3 text-slate-600 text-xs">
                                    {recomdata?.Cars?.CurrentRecoms[1]?.Share}
                                </li>
                                <li className="ml-3 text-slate-600 text-xs">
                                    <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
                                    </svg>
                                </li>                                
                                <li className="ml-3 text-slate-600 text-xs">
                                    <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/>
                                    </svg>
                                </li>
                                <li className="text-slate-600 text-xs ml-28">
                                    {recomdata?.Cars?.CurrentRecoms[1]?.RentalCost}/h
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="
                        bg-custom-pink 
                        hover:shadow-inner 
                        hover:-translate-y-1 
                        hover:scale-105 
                        delay-75 
                        duration-500 
                        rounded-xl 
                        w-80 
                        h-40"
                    >
                        <div className="flex justify-start">
                            <ul className="flex flex-row ml-10 mt-3 cursor-default">
                                <li className="justify-center items-center">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#475569">
                                        <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/>
                                    </svg>
                                </li>
                                <li className="text-sm flex items-center text-black">
                                    {recomdata?.Cars?.CurrentRecoms[2]?.Recommended}% Recommend
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <Image
                                src={recomdata?.Cars?.CurrentRecoms[2]?.ImageLink}
                                width={140}
                                height={140}
                                alt="Picture of the recommended car."
                            />
                        </div>
                        <div className="font-bold ml-10 text-base text-black">
                            {recomdata?.Cars?.CurrentRecoms[2]?.CarName}
                        </div>
                        <div className="ml-10">
                            <ul className="flex flex-row cursor-default items-center">
                                <li className="">
                                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m600-200-56-57 143-143H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760h20v80h-20q-42 0-71 29t-29 71q0 42 29 71t71 29h387L544-624l56-56 240 240-240 240Z"/>
                                    </svg>
                                </li>
                                <li className="ml-3 text-slate-600 text-xs">
                                    {recomdata?.Cars?.CurrentRecoms[2]?.Share}
                                </li>
                                <li className="ml-3 text-slate-600 text-xs">
                                    <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
                                    </svg>
                                </li>                                
                                <li className="ml-3 text-slate-600 text-xs">
                                    <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#475569">
                                        <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/>
                                    </svg>
                                </li>
                                <li className="text-slate-600 text-xs ml-28">
                                    {recomdata?.Cars?.CurrentRecoms[2]?.RentalCost}/h
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
        </div>


    );
}
 
export default GridLayout ;
