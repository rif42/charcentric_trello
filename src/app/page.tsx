import { useEffect } from "react";
import Image from "next/image";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{session ? "WE'RE SO BACK" : "YOU SHALL NOT PASS"}</h1>
      <h1>{String(session?.user?.name)}</h1>
    </main>
  );
}
