"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  age: z.number().min(18, "Age must be at least 18"),
  email: z.string().email("Invalid email address"),
});

interface FormData extends z.infer<typeof schema> {}

export default function CardInput() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    toast(JSON.stringify(data));
  };

  return (
    <div>
      <h1>Card Input</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Age</label>
          <input type="number" {...register("age")} />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}