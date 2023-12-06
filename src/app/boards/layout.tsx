import BoardInput from "./BoardInput";

export default async function layout() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      YOU ARE IN THE CARDS PAGE
      <BoardInput />
    </main>
  );
}