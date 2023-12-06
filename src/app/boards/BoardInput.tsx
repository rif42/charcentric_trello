"use client"

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
    const result = await createBoard({ board_title: data.board_title, board_desc: data.description});
    toast(JSON.stringify(result));
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <label>board_title</label>
        <input type="text" {...form.register("board_title")} />
        {errors.board_title && (
          <span>{errors.board_title.message}</span>
        )}
      </div>
      <div>
        <label>Description</label>
        <input type="text" {...form.register("description")} />
        {errors.description && (
          <span>{errors.description.message}</span>
        )}
      </div>
      <button type="submit">Submit</button>
      <ToastContainer />
    </form>
  );
}