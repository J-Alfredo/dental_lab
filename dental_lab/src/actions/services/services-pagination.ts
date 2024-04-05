'use server'

import prisma from '@/lib/prisma'
import { log } from 'console';

export const getServices = async() => {
  
    try {
        
        const services = await prisma.service.findMany({
            include: {
                ServiceImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        })

        console.log(services);
        


    } catch (error) {
        
    }

}
