import React, { useEffect } from "react";
import { readBoard } from "../actions";
import { IoPersonCircle } from "react-icons/io5";

export default async function BoardList() {
  
  const boardsWithCards = await readBoard();
  console.log(boardsWithCards[0].cards); // Do something with the fetched boards and cards data
  

  const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 'bg-purple-100', 'bg-indigo-100', 'bg-gray-100'];

  function handleLongText(text: string) {
    if (text.length > 110) {
      return text.slice(0, 110) + "...";
    }
    return text;
  }

  return (
    <div>
    <div className="flex pt-3 pl-10 flex-col h-60 w-full">
      <h2 className="text-[1.5em] font-semibold py-3">Stuff</h2>
      <div className="w-full h-full overflow-x-scroll">
        <div className="flex flex-row flex-nowrap h-full snap-x snap-mandatory touch-auto">
          {boardsWithCards?.map((board: any, index: number) => (
            <div
              key={board.board_id}
              className={`w-96 flex flex-col h-fit p-3 pt-3 mr-5 text-lg font-medium rounded-xl flex-shrink-0 ${colors[index % colors.length]}`}
            >
              <h3>{board.board_title}</h3>
              <ul>
                {board.cards.map((card: any) => (
                  <li className="w-10 h-10" key={card.card_id}>{card.card_title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
}
