import React from 'react'

interface props {
    text: string;
}

export const Button = ({text} : props) => {
  return (
    <button className="px-6 py-2 text-black transition duration-700 ease-out border border-black rounded-lg hover:bg-black hover:text-white">{text}</button>
  )
}
