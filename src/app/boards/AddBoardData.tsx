
import { createBoard, } from "@/src/app/actions";

export default async function AddBoardData (board_title : string) {
    const result = await createBoard(board_title);
    console.log("adding board", result)
    return result;
}