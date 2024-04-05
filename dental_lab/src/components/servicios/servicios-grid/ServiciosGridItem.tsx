
import { Service } from '@/interfaces';
import Image from 'next/image';

interface Props {
    service: Service;
}

export const ServiciosGridItem = ({ service }: Props) => {
    return (
        <div className="rounded-md overflow-hidden">
            <Image
                src={`/services/${service.images[0]}`}
                alt = {service.title}
                className='w-full object-cover'
                width={500}
                height={500}
            />
        </div>
    )
}
