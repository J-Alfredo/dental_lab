import Image from 'next/image'
import { Button } from '@/components/index';

interface Props {
    title: string
    description: string
}

export const ServiceCard = ({title, description} : Props) => {
  return (
    <div className="bg-slate-200">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-slate-300 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset="1" stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">{title}</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-800">{description}</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <Button text={'Agenda una cita'} />
                                </div>
                        </div>
                        <div className=" mt-16 h-full lg:mt-8 flex items-center justify-center">
                            {/* <Image
                                src={}
                                width={500}
                                height={500}
                                alt={'Servicio'}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
  )
}
