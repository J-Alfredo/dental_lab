import { getServices } from '@/actions';
import { Navbar, Footer, ServiceCard } from '@/components/index';
import { notFound } from 'next/navigation';


interface Props {
    params: {
        id: string;
    }
}

export default async function({params} : Props) {
    
    // const services = await getServices();

    const { id  } = params;

    if (id === 'kids') {
        notFound();
    }

    return (
        <>
            <ServiceCard 
                title = 'servicio'
                description = 'description'
            />
            <p>{ id }</p>
            {/* Gallery */}
       
            
            <Footer />
        </>
    );
}