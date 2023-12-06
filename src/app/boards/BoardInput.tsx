"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBoard, signInWithEmailAndPassword } from "../auth/actions";

const FormSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
});

export default function CardInput() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    toast(JSON.stringify(data));
    const result = await createBoard(data.title);
    const { error } = JSON.parse(result);
    error ? toast.error(error.message) : "Logged in successfully";
    form.reset();
  }

  return (
    <form
      className="flex flex-col w-96 min-h-[30rem] h-[40vh] justify-center align-middle items-center bg-slate-300 rounded-bl-lg rounded-br-lg"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <ToastContainer />
      <div className="flex flex-col justify-center align-middle text-center pb-10 w-[75%]">
        <label className="pb-2">title</label>
        <input className="rounded-md p-3" type="text" />
      </div>
      <button
        className="py-3 px-5 bg-black text-white rounded-lg"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
