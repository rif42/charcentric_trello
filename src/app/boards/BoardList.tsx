import React, { useEffect } from "react";
import { readBoard } from "../actions";
import { IoPersonCircle } from "react-icons/io5";
import { Board, Card, BoardWithCards } from "../types";

export default async function BoardList() {
  const boardsWithCards = await readBoard();
  // console.log(boardsWithCards[0].cards); // Do something with the fetched boards and cards data

  const colors = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-indigo-100",
    "bg-gray-100",
  ];

  function handleLongText(text: string) {
    if (text.length > 110) {
      return text.slice(0, 110) + "...";
    }
    return text;
  }

  function IndividualCard(card: Card) {
    return (
      <li className="w-full p-2 bg-gray-200 rounded-xl text-lg mt-3">
        <div>{card.card_title}</div>
        <div>{card.card_desc}</div>
      </li>
    );
  }

  return (
    <div>
      <div className="flex pt-3 pl-10 flex-col w-full">
        <h2 className="text-[1.5em] font-semibold py-3">Stuff</h2>
        <div className="w-full h-fit overflow-x-scroll">
          <div className="flex flex-row flex-nowrap snap-x snap-mandatory touch-auto ">
            {boardsWithCards?.map((board: BoardWithCards, index: number) => (
              <div
                key={board.board_id}
                className={`w-96 flex flex-col p-3 pt-3 mr-5 text-lg font-medium rounded-xl flex-shrink-0 ${
                  colors[index % colors.length]
                }`}
              >
                <div className="w-full p-2 bg-white rounded-xl text-xl">
                  {board.board_title}
                </div>

                <ul>
                  <div className="flex flex-row h-3 mt-3">
                    <span className="w-24 h-full bg-red-500 text-transparent rounded-xl mr-3">
                      .
                    </span>
                    <span className="w-24 h-full bg-blue-500 text-transparent rounded-xl mr-3">
                      .
                    </span>
                  </div>
                  {board.cards.map((card: Card) => (
                    <IndividualCard key={card.card_id} {...card} />
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
