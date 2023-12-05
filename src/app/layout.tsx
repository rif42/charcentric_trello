import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import readUserSession from "../lib/actions";

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  const { data } = await readUserSession();
  return (
    <html lang="en">
      <body className={inter.className}>
          {data.session ? <Header /> : null}
          {children}
      </body>
    </html>
  );
}
