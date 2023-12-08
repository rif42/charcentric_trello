import { Card, AddCard } from "../types"
import { deleteCard, } from "@/src/app/actions";

export default async function DeleteCardData (card_id : string) {
    const result = await deleteCard(card_id);
    console.log("deleting card", result)
    return result;
}