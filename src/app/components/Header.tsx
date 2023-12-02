import Image from "next/image";
import { Input } from "postcss";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(options);

  return (
    <nav className="flex flex-row h-20 w-full bg-red-200">
      <div className="flex grow-0 flex-col justify-center items-center px-10">
        <Image src="/trello.png" width={100} height={100} alt="Trello logo" />
      </div>
      <div className="flex grow-0 flex-row justify-center items-center px-10">
        <Image
          src="/boards.png"
          width={25}
          height={25}
          alt="Boards icon"
          className="m-2"
        />
        <p>Boards</p>
      </div>
      <div className="flex grow-0 w-[20%] flex-col justify-center items-center px-10">
        <input
          placeholder="Search"
          className="rounded-lg w-[100%] text-red-500 p-1"
        />
        <Image
          src="/search.png"
          width={15}
          height={15}
          alt="search icon"
          className="absolute self-end m-1"
        />
      </div>
      <div className="flex grow flex-col justify-center items-center px-10"></div>
      <div className="flex grow-0 flex-row justify-center items-center">
        <Image
          className="mx-2"
          src="/plus-circle-outline.png"
          width={25}
          height={25}
          alt="Plus icon"
        />
        <Image
          className="mx-2"
          src="/bell-outline.png"
          width={25}
          height={25}
          alt="bell icon"
        />
        <Image
          className="mx-2"
          src="/alert-circle-outline.png"
          width={25}
          height={25}
          alt="alert icon"
        />
      </div>
      <div className="flex grow-0 flex-col justify-center items-center px-10">
        <Image src="/User.png" width={50} height={50} alt="user profile picture" /> //TODO: add user image fetched from backend, use client component
      </div>
      <div className="flex grow-0 flex-col justify-center items-center pr-10">
        <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
          {session ? "Sign Out" : "Sign In"}
        </Link>
      </div>
    </nav>
  );
}
