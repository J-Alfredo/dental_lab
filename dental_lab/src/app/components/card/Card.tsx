import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

export const Card = ({title, subtitle, icon} : Props) => {
    return (
        <div className="rounded-lg flex flex-col justify-center bg-gray-50 px-16 py-10 min-h-96">
            <div className="flex justify-center">
                {icon}
            </div>
            <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">{title}</h3>
            <p className=" text-center font-normal text-gray-600">{subtitle}</p>
        </div>
    )
}
