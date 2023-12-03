"use client";

import { useState } from "react";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };

  // const handleSubmit = (data: any) => {
  //   toast.success(`Form data: ${JSON.stringify(data)}`);
  // };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center align-middle">
        <button
          onClick={() => setIsRegister(false)}
          className={isRegister ? "w-[50%] p-5 rounded-tr-lg rounded-tl-lg bg-white" : " w-[50%] p-5 rounded-tr-lg rounded-tl-lg bg-slate-300 "}
        >
          Login
        </button>
        <button
          onClick={() => setIsRegister(true)}
          className={isRegister ? "w-[50%] p-5 rounded-tr-lg rounded-tl-lg bg-slate-300" : " w-[50%] p-5 rounded-tr-lg rounded-tl-lg bg-white "}
        >
          Register
        </button>
      </div>
      {isRegister ? (
        <RegisterForm />
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default AuthForm;
