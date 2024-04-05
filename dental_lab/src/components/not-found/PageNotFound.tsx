import { fontH1 } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/index';

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle'>
        <div className='text-center px-5 mx-5'>
            <h2 className={`${fontH1.className} antialiased text-9xl`}>404</h2>
            <p className='font-semibold text-xl'>Página no encontrada</p>
            <p className='font-light'>
                <span>Puedes regresar al Inicio</span>
            </p>
            <Link href='/'><Button text='Inicio'></Button></Link>
        </div>
    </div>
  )
}
