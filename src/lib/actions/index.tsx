"use server"
import createSupabaseServerClient from "../supabase/server";

export default async function readUserSession(){
    const supabase = await createSupabaseServerClient()
    return supabase.auth.getSession();
}

export async function createBoard (title:string){
    const supabase = await createSupabaseServerClient()
    const result = await supabase.from("Boards").insert([{title}]).single()
    return JSON.stringify(result);
}