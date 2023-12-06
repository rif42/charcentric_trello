"use server";
import createSupabaseServerClient from "@/src/app/lib/supabase/server";

//auth functions
export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export default async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}
//auth functions

//db functions
export async function createBoard(boardData: {
  board_title: string;
  board_desc: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from("Boards")
    .insert([
      { board_title: boardData.board_title, board_desc: boardData.board_desc },
    ])
    .single();
  return JSON.stringify(result);
}

export async function readBoard() {
  const supabase = await createSupabaseServerClient();
  return await supabase.from("Boards").select("*");
}
// db function
