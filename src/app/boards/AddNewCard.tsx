"use client";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Card, AddNewCardProps } from "../types"
import AddCardData from "./AddCardData";

export default function AddNewCard({ board_id }: AddNewCardProps) {
  const [addNew, setAddNew] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e: React.FormEvent) {
    const result = AddCardData({card_title:title, card_desc:desc, board_id:board_id});
    setTitle("");
    setDesc("");
    setAddNew(false);
    e.preventDefault();
  }

  return (
    <button className="w-full cursor-pointer p-2 py-6 bg-white border-2 border-gray-300 border-dashed rounded-xl text-lg mt-3 flex justify-center items-center">
      {!addNew && (
        <span
          onClick={() => setAddNew(true)}
          className="flex flex-row justify-center items-center"
        >
          <FaPlus /> Add new card
        </span>
      )}
      {addNew && (
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
              <button
                className="w-fit px-3 py-2 mt-3 self-center rounded-lg bg-gray-200"
                onClick={() => setAddNew(false)}
              >
                Cancel
              </button>
              <button
                className="w-fit px-3 py-2 mt-3 self-center rounded-lg bg-gray-200"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </button>
  );
}
