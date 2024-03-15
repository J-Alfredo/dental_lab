import React from 'react'
import { Button } from '../button/Button'

export const Navbar = () => {
  return (
	<nav
		className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 white:bg-[#0c1015] transition duration-700 ease-out"
	>
		<div className="flex justify-between p-4">
			<div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black">
				Gallardo
			</div>
            <div className='flex justify-between p-4 space-x-5 text-dark'>
                <a href="">Servicios</a>
                <a href="">Galería</a>
                <a href="">Contacto</a>
            </div>
			<div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
                <Button text='Contacto'/>
			</div>
		</div>
	</nav>
  )
}
