import { getServices } from '@/actions';
import { Navbar, Footer, ServiceCard } from '@/components/index';

export default async function servicePage() {

    const services = await getServices();

    return (
        <>
            <Navbar />
            <ServiceCard 
                title = 'servicio'
                description = 'description'
            />
            {/* Gallery */}
       
            
            <Footer />
        </>
    );
}