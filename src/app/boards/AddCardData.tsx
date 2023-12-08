import { Card, AddCard } from "../types"
import { createCard, } from "@/src/app/actions";

export default async function AddCardData (card : AddCard) {
    const result = await createCard(card);
    console.log("adding card", result)
    return result;
}