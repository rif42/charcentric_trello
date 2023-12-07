"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBoard } from "../actions";

const FormSchema = z.object({
  board_title: z.string().min(1, "board_title is required."),
  description: z.string().min(1, "Description is required."),
});

export default function CardInput() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      board_title: "",
      description: "",
    },
  });

  const { errors } = form.formState;

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    toast(JSON.stringify(data));
    const result = await createBoard({
      board_title: data.board_title,
      board_desc: data.description,
    });
    toast(JSON.stringify(result));
    form.reset();
    location.reload();
  };

  return (
    <div className="flex pt-5 pl-10">
      <form className="flex flex-row bg-slate-300 p-3 rounded-xl" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="flex flex-row pb-3">
            <label className="flex flex-col w-44 justify-center items-center">Board Title</label>
            <input className="w-96 rounded-lg p-1" type="text" {...form.register("board_title")} />
            {errors.board_title && <span>{errors.board_title.message}</span>}
          </div>
          <div className="flex flex-row">
            <label className="flex flex-col w-44 justify-center items-center">Board Description</label>
            <textarea className="w-96 rounded-lg p-1" {...form.register("description")} />
            {errors.description && <span>{errors.description.message}</span>}
          </div>
        </div>
        <button className="ml-3 px-5 bg-gray-500 text-white rounded-lg" type="submit">Submit</button>
        <ToastContainer />
      </form>
    </div>
  );
}
