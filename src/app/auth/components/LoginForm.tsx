import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "../actions";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password is required.",
  }),
});

interface FormData extends z.infer<typeof FormSchema> {}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit (data: FormData) {
    // toast(JSON.stringify(data));
    const result = await signInWithEmailAndPassword(data);
    const {error} = JSON.parse(result);
    error? toast.error(error.message): "Logged in successfully";
  };

  return (
    <form className='flex flex-col w-96 min-h-[30rem] h-[40vh] justify-center align-middle items-center bg-slate-300 rounded-bl-lg rounded-br-lg'
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer />
      <div className="flex flex-col justify-center align-middle text-center pb-10 w-[75%]">
        <label className='pb-2'>Email</label>
        <input className='rounded-md p-3' type="email" {...register("email")} />
        {errors.email && <span className=' text-red-600'>{errors.email.message}</span>}
      </div>
      <div className='flex flex-col justify-center align-middle text-center pb-10 w-[75%]'>
        <label className='pb-2'>Password</label>
        <input className='rounded-md p-3' type="password" {...register("password")} />
        {errors.password && <span className=' text-red-600'>{errors.password.message}</span>}
      </div>
      <button className='py-3 px-5 bg-black text-white rounded-lg' type="submit">Login</button>
    </form>
  );
}
