"use client";
import { useState, useRef } from "react";
import { EditBoardProps } from "../types";
import { updateBoard, deleteBoard } from "@/src/app/actions";

export default function EditBoard({
  board_id,
  board_title,
  handleClick,
}: EditBoardProps) {
  const cancelButtonRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState(board_title);
  function handleSubmitBoard(e: React.FormEvent) {
    board_title = title;
    const result = updateBoard(board_id, board_title);
    console.log("updating board", result);
    e.preventDefault();
    if (cancelButtonRef.current) {
      cancelButtonRef.current.click();
    }
  }

  return (
    <button className="w-full text-lg mt-3 flex justify-center items-center">
      <div>
        <form className="flex flex-col" onSubmit={handleSubmitBoard}>
          <input
            className="rounded-lg p-2 text-lg font-semibold mb-2 border-2 border-gray-300"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Input Title Here"
          />
          <div className="flex flex-row justify-center gap-4">
            <div
              ref={cancelButtonRef}
              onClick={handleClick}
              className="w-fit px-3 py-2 mt-3 self-center rounded-lg bg-gray-200"
            >
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
