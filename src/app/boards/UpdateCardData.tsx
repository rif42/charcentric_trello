import { Card, AddCard } from "../types"
import { updateCard, } from "@/src/app/actions";

export default async function UpdateCardData (card : Card) {
    const result = await updateCard(card);
    return result;
}