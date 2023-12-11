"use server"

import Image from "next/image";
import { Input } from "postcss";
import React from "react";
import Link from "next/link";
import LogoutButton from "../auth/components/LogoutButton";

export default async function Header() {

  return (
    <nav className="flex flex-row h-20 w-full border border-gray-500">
      <div className="md:flex hidden grow-0 flex-col justify-center items-center px-10">
        <Image src="/trello.png" width={100} height={100} alt="Trello logo" />
      </div>
      <div className="flex grow-0 flex-row justify-center items-center md:px-10">
        <Image
          src="/boards.png"
          width={25}
          height={25}
          alt="Boards icon"
          className="m-2 w-10"
        />
        <p className="md:flex hidden">Boards</p>
      </div>
      <div className="flex grow-1 md:grow-0 md:w-[20%] flex-col justify-center items-center px-2 md:px-10">
        <input
          placeholder="Search"
          className="rounded-lg w-[100%] p-1 border border-gray-500 bg-gray-100"
        />
        <Image
          src="/search.png"
          width={15}
          height={15}
          alt="search icon"
          className="absolute self-end m-2"
        />
      </div>
      <div className="flex md:grow flex-col justify-center items-center"></div>
      <div className="flex md:grow-0 grow flex-row md:justify-center justify-end items-center">
        <Image
          className="md:mx-2 mx-1"
          src="/plus-circle-outline.png"
          width={25}
          height={25}
          alt="Plus icon"
        />
        <Image
          className="md:mx-2 mx-1"
          src="/bell-outline.png"
          width={25}
          height={25}
          alt="bell icon"
        />
        <Image
          className="md:mx-2 mx-1"
          src="/alert-circle-outline.png"
          width={25}
          height={25}
          alt="alert icon"
        />
      </div>
      <div className="flex grow-0 flex-col justify-center items-center px-2 md:px-10">
        <Image src="/User.png" width={50} height={50} alt="user profile picture" /> 
        {/* TODO: add user image fetched from backend, use client component */}
      </div>
      <div className="hidden md:flex grow-0 flex-col justify-center items-center pr-10">
        <LogoutButton />
      </div>
    </nav>
  );
}
