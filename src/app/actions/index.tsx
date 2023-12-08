"use server";
import createSupabaseServerClient from "@/src/app/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { BoardWithCards } from "../types"

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
export async function createBoard(board_title: string) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("Boards").insert(board_title).single();
  return JSON.stringify(result);
}

export async function readBoard() {
  const supabase = await createSupabaseServerClient();
  const { data: boards, error: boardsError } = await supabase
    .from("Boards")
    .select("*");
  if (boardsError) {
    throw boardsError;
  }

  const boardIds = boards.map((board) => board.board_id);
  const { data: cards, error: cardsError } = await supabase
    .from("Cards")
    .select("*")
    .in("board_id", boardIds);

  if (cardsError) {
    throw cardsError;
  }

  const boardsWithCards: BoardWithCards[] = boards.map((board) => {
    const boardCards = cards
      .filter((card) => card.board_id === board.board_id)
      .map((card) => ({ ...card, created_at: new Date(card.created_at) }));
    return { ...board, cards: boardCards };
  });

  // console.log("boardsWithCards", boardsWithCards[0])
  return boardsWithCards;
}

export async function deleteBoard(id: string) {
  const supabase = await createSupabaseServerClient();
  await supabase.from("Boards").delete().match({ id: id });
  revalidatePath("/boards");
}
// db function
