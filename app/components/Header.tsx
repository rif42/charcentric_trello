"use client";

import Image from "next/image";
import { Input } from "postcss";
import React from "react";

export default function Header() {
    return (
        <div className='flex flex-row h-20 w-full bg-red-200'>
            <div className='flex grow-0 flex-col justify-center items-center px-10'>
                <Image src='/trello.png' width={100} height={100} alt='Trello logo' />
            </div>
            <div className='flex grow-0 flex-row justify-center items-center px-10'>
                <Image src='/boards.png' width={25} height={25} alt='Boards icon' />
                <p>Boards</p>
            </div>
            <div className='flex grow-0 w-[20%] flex-col justify-center items-center px-10'>
                <input placeholder='Search' className="rounded-lg w-[100%] text-red-500 p-1" />
                <Image src='/search.png' width={15} height={15} alt='Boards icon' className='absolute self-end m-1' />
            </div>
            <div className='flex grow flex-col justify-center items-center px-10'>
            </div>
            <div className='flex grow-0 flex-row justify-center items-center px-10'>
                <Image className="mx-2" src='/plus-circle-outline.png' width={25} height={25} alt='Plus icon' />
                <Image className="mx-2" src='/bell-outline.png' width={25} height={25} alt='bell icon' />
                <Image className="mx-2" src='/alert-circle-outline.png' width={25} height={25} alt='alert icon' />
            </div>
            <div className='flex grow-0 flex-col justify-center items-center px-10'>
                <Image src='/User.png' width={50} height={50} alt='alert icon' />
            </div>
        </div>
    );
}