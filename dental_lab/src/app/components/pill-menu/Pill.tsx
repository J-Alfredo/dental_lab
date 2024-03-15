import React from 'react'

interface props {
    text: string;
}

export const Pill = ({text} : props) => {
    return (
        <div className="relative flex items-center space-x-4 py-8 justify-center border h-12 px-6 border-2 rounded-md border-gray-300  transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
            <a href="">
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">{text}</span>
            </a>
        </div>
    )
}
