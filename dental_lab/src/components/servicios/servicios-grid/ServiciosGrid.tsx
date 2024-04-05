import { Service } from "@/interfaces";
import { ServiciosGridItem } from "./ServiciosGridItem";

interface Props {
    services : Service[];
}

export const ServiciosGrid = ({services} : Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {
            services.map(service => (
                <ServiciosGridItem 
                    service={service}
                />
            ))
        }
    </div>
  )
}
