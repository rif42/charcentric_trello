
import AuthForm from "./auth/components/AuthForm";
import {redirect} from "next/navigation"
import readUserSession from "./actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default async function Home() {
  const {data} = await readUserSession();
  if (!data.session){
    return redirect("/auth")
  } else {
    return redirect("/boards")
  }
}