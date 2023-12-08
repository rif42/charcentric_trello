"use client";
import { Board, Card, BoardWithCards } from "../types";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { deleteCard } from "@/src/app/actions";

export default function IndividualCard(card: Card) {
  function handleLongText(text: string) {
    if (text.length > 110) {
      return text.slice(0, 110) + "...";
    }
    return text;
  }

  function handleDeleteCard(card_id: string) {
    console.log("deleting card", card_id);
    const result = deleteCard(card_id);
  }
  return (
    <li className="w-full p-3 bg-gray-200 rounded-xl mt-3 group">
      <div className="flex flex-row h-2 w-full rounded-xl gap-3 my-2">
        <button className="w-[20%] h-full bg-red-500 rounded-xl" />
        <button className="w-[20%] h-full bg-blue-500 rounded-xl" />
      </div>
      <div className="text-lg font-semibold flex flex-row justify-between">
        <p>{card.card_title}</p>
        <div className=" flex-1 flex-row gap-3 items-center justify-end hidden group-hover:flex">
          <button className="cursor-pointer">
            <FiEdit2 />
          </button>
          <button
            onClick={() => handleDeleteCard(card.card_id)}
            className="cursor-pointer"
          >
            <FiTrash />
          </button>
        </div>
      </div>
      <div className="text-base font-light">{card.card_desc}</div>
    </li>
  );
}