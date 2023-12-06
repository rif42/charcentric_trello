import React, { useEffect } from "react";
import { readBoard } from "../actions";
import { IoPersonCircle } from "react-icons/io5";

export default async function BoardList() {
  const { data: boards, error } = await readBoard();

  const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 'bg-purple-100', 'bg-indigo-100', 'bg-gray-100'];

  function handleLongText(text: string) {
    if (text.length > 110) {
      return text.slice(0, 110) + "...";
    }
    return text;
  }

  return (
    <div>
      <div className="flex flex-col h-56 w-full">
        <h2 className=" text-[1.5em] font-semibold py-3">Recently Viewed</h2>
        <div className=" w-full h-full overflow-x-scroll">
          <div className="flex flex-row flex-nowrap h-full snap-x snap-mandatory touch-auto">
            {boards?.map((board: any, index:number) => (
              <div
                key={board.id}
                className={`w-96 flex flex-col h-fit p-3 pt-3 mr-5 text-lg font-medium rounded-xl flex-shrink-0 ${colors[index % colors.length]}`}
              >
                {board.board_title}
                <div className=" text-base font-normal">
                  {handleLongText(board.board_desc ? board.board_desc : "")}
                </div>
                <div className="flex flex-row py-3 space-x-[-20px]">
                  <IoPersonCircle size={"2em"} />
                  <IoPersonCircle size={"2em"} />
                  <IoPersonCircle size={"2em"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
