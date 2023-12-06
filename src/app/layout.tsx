import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import readUserSession from "./actions";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  const { data } = await readUserSession();
  return (
    <html lang="en">
      <body className={montserrat.className}>
          {data.session ? <Header /> : null}
          {children}
      </body>
    </html>
  );
}
