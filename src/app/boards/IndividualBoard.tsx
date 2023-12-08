"use client";

import { Board, Card, BoardWithCards } from "../types";
import { FiEdit2, FiTrash } from "react-icons/fi";
import React from "react";
import EditBoard from "./EditBoard";
import { deleteBoard } from "../actions";

export default function IndividualBoard(board: Board) {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleDeleteBoard(board_id: string) {
    console.log("deleting card", board_id);
    const result = deleteBoard(board_id);
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <div className="w-full p-3 flex flex-row justify-between bg-gray-200 rounded-xl text-xl group">
          <div> {board.board_title} </div>
          <div className=" flex flex-row gap-3 items-center justify-center invisible group-hover:visible">
            <button
              onClick={() => setIsEditing(true)}
              className="cursor-pointer"
            >
              <FiEdit2 />
            </button>
            <button
              onClick={() => handleDeleteBoard(board.board_id)}
              className="cursor-pointer"
            >
              <FiTrash />
            </button>
          </div>
        </div>
      )}
      {isEditing && (
        <EditBoard
          board_id={board.board_id}
          board_title={board.board_title}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}
