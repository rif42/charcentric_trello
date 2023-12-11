import { readBoard } from "../actions";
import { IoPersonCircle } from "react-icons/io5";
import { Board, Card, BoardWithCards } from "../types";
import IndividualCard from "./IndividualCard";
import AddNewCard from "./AddNewCard";
import AddNewBoard from "./AddNewBoard";
import IndividualBoard from "./IndividualBoard";
import {redirect} from "next/navigation"
import readUserSession from "../actions";

export default async function BoardList() {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/auth");
  }
  const boardsWithCards = await readBoard();
  console.log(boardsWithCards[0].cards)

  const colors = [
    // "bg-white",
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-indigo-100",
    "bg-gray-100",
  ];

  return (
    <div>
      <div className="flex pt-3 md:pl-10 flex-col w-full">
        <h2 className="text-[1.5em] font-semibold pl-3 md:pl-0 py-3">Stuff</h2>
        <div className="w-full h-fit overflow-x-scroll">
          <div className="flex flex-row flex-nowrap snap-x snap-mandatory touch-auto ">
            {boardsWithCards?.map((board: BoardWithCards, index: number) => (
              <div
                key={board.board_id}
                className={`md:w-96 w-[100vw] h-fit flex flex-col p-3 pt-3 mr-5 text-lg font-medium rounded-xl flex-shrink-0 ${
                  colors[index % colors.length]
                }`}
              >
                <IndividualBoard {...board} />
                <ul>
                  {board.cards.map((card: Card) => (
                    <IndividualCard key={card.card_id} {...card} />
                  ))}
                </ul>
                <AddNewCard board_id={board.board_id} />
              </div>
            ))}
            <div
              className={`w-96 flex h-fit  p-3 pt-3 mr-5 rounded-xl flex-shrink-0`}
            >
              <AddNewBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
