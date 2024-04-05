import type { Metadata } from "next";
import "../globals.css";
import { inter } from "@/config/fonts";
import { Footer, Navbar } from "@/components";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='hidden md:flex justify-center'>
          <Link className='m-2 p-2 rounded-md transtition-all hover:bg-gray-100' href="/category/protesis_sobre_implante">Prótesis sobre implante</Link>
          <Link className='m-2 p-2 rounded-md transtition-all hover:bg-gray-100' href="/category/temporales">Temporales</Link>
          <Link className='m-2 p-2 rounded-md transtition-all hover:bg-gray-100' href="/category/metal_porcelana">Metal porcelana</Link>
          <Link className='m-2 p-2 rounded-md transtition-all hover:bg-gray-100' href="/category/protesis_removible">Prótesis removibles</Link>
          <Link className='m-2 p-2 rounded-md transtition-all hover:bg-gray-100' href="/category/libres-de-metal">Libres de metal</Link>
          <Link className='m-2 p-2 rounded-md transtition-all hover:bg-gray-100' href="/category/placas-de-ortodoncia">Placas de ortodoncia</Link>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}