"use client";
import { FaPlus } from "react-icons/fa6";
import { useState, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { Card, AddNewCardProps } from "../types";
import AddCardData from "./AddCardData";
import { ButtonProps, EditCardProps } from "../types";
import UpdateCardData from "./UpdateCardData";

export default function EditCard({ card, handleClick }: EditCardProps) {
  const cancelButtonRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState(card.card_title);
  const [desc, setDesc] = useState(card.card_desc);
  // const [refresh, setRefresh] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    card.card_title = title;
    card.card_desc = desc;
    const result = UpdateCardData(card)
    console.log("updating card", result)
    e.preventDefault();
    if (cancelButtonRef.current) {
      cancelButtonRef.current.click();
    }
  }

  return (
    <button className="w-full text-lg mt-3 flex justify-center items-center">
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="rounded-lg p-2 text-lg font-semibold mb-2 border-2 border-gray-300"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Input Title Here"
          />
          <textarea
            className="rounded-lg p-2 text-base border-2 font-light border-gray-300"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Input Description Here"
          ></textarea>
          <div className="flex flex-row justify-center gap-4">
            <div ref={cancelButtonRef} onClick={handleClick} className="w-fit px-3 py-2 mt-3 self-center rounded-lg bg-gray-200">
              Cancel
            </div>
            <button
              className="w-fit px-3 py-2 mt-3 self-center rounded-lg bg-gray-200"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </button>
  );
}
