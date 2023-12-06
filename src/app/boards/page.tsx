import BoardInput from "./BoardInput";
import BoardList from "./BoardList";
import readUserSession from "../actions";
import { redirect } from "next/navigation";

export default async function page() {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/auth");
  }

  return (
    <main className="flex flex-col p-10">
      
      <BoardInput />
      <BoardList />
    </main>
  );
}
