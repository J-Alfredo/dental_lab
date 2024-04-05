import React from 'react'
import { Button } from '../button/Button'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";


export const Navbar = () => {
  return (
	<nav
		className="inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 white:bg-[#0c1015] transition duration-700 ease-out"
	>
		<div className="flex justify-between p-4">
			{/* Logo */}
			<div className="flex items-center text-[2rem] leading-[3rem] tracking-tight font-bold text-black">
				<Link href='/'>
					Gallardo
				</Link>
			</div>
			{/* Menu items */}
            <div className='hidden sm:block flex justify-between p-4 space-x-5 text-dark'>
                <Link className="m-2 p-2 rounded-md transtition-all hover:bg-gray-100" href="">Servicios</Link>
                <Link className="m-2 p-2 rounded-md transtition-all hover:bg-gray-100" href="">Galería</Link>
                <Link className="m-2 p-2 rounded-md transtition-all hover:bg-gray-100" href="">Contacto</Link>
            </div>
			<div className='flex sm:hidden justify-between p-4 space-x-5 text-dark'>
				<Link href="">
					<IoMenu className='w-10 h-10'/>
				</Link>
			</div>
			{/* CTA */}
			<div className="hidden sm:block flex items-center space-x-4 text-lg font-semibold tracking-tight">
                <Button text='Contacto'/>
			</div>
		</div>
	</nav>
  )
}
