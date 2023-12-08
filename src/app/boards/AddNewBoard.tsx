"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import AddBoardData from "./AddBoardData";

export default function AddNewBoard() {
  const [addNew, setAddNew] = React.useState(false);
  const [title, setTitle] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    console.log("adding board title", title);
    const result = AddBoardData(title as string);
    setTitle("");
    setAddNew(false);
    e.preventDefault();
  }

  return (
    <div className="w-full cursor-pointer  p-3 bg-gray-200 rounded-xl text-lg">
      {!addNew && (
        <div
          className="flex flex-row justify-center items-center"
          onClick={() => setAddNew(true)}
        >
          <FaPlus className={"mr-2"} /> Add new board
        </div>
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
            <div className="flex flex-row justify-center items-start gap-4">
              <button
                className="w-fit px-3 py-2 mt-3 rounded-lg bg-white"
                onClick={() => setAddNew(false)}
              >
                Cancel
              </button>
              <button
                className="w-fit px-3 py-2 mt-3 rounded-lg bg-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
