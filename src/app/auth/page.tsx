import React from "react";
import AuthForm from "./components/AuthForm";
import readUserSession from "../actions";
import { redirect } from "next/navigation"

export default async function page(){
    const {data} = await readUserSession()
    console.log(data)
    if (data.session){console.log("user logged in")}
    if (data.session){return redirect('/cards')}
    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <AuthForm />
        </div>
    )
} 