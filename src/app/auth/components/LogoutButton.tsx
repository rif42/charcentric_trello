import createSupabaseServerClient from "@/src/lib/supabase/server";
import React from "react";
import { redirect } from "next/navigation";

export default function SignOut() {
  const logout = async () => {
    "use server"
    const supabase = await createSupabaseServerClient();
    const result = await supabase.auth.signOut();
    redirect("/auth");
  };
  return (
    <form action={logout} className="flex flex-row justify-center items-center align-middle w-full h-full">
        <button className=" bg-gray-600 rounded-lg p-3 text-white">Sign Out</button>
    </form>
  )
}
