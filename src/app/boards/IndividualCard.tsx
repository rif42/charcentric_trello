import { Board, Card, BoardWithCards } from "../types";

export default function IndividualCard(card: Card) {
  function handleLongText(text: string) {
    if (text.length > 110) {
      return text.slice(0, 110) + "...";
    }
    return text;
  }
  return (
    <li className="w-full p-3 bg-gray-200 rounded-xl mt-3">
      <div className="flex flex-row h-2 w-full rounded-xl gap-3 my-2">
        <button className="w-[20%] h-full bg-red-500 rounded-xl" />
        <button className="w-[20%] h-full bg-blue-500 rounded-xl" />
      </div>
      <div className="text-lg font-semibold">{card.card_title}</div>
      <div className="text-base font-light">{card.card_desc}</div>
    </li>
  );
}
