import {initialData} from './seed'
import prisma from '../lib/prisma'
import { log } from 'console';

async function main() {
    
    // Borras contenido de tablas
    // await Promise.all([ // Esta linea hace que se ejecuten de manera simultanea
    await prisma.serviceImage.deleteMany();
    await prisma.service.deleteMany();
    await prisma.category.deleteMany();
    // ]);
    

    // Categorias
    const {categories, services} = initialData;

    // const categoriesData = categories.map( (name) => ({ name }));

    const categoriesData =  categories.map( category => ({
        name: category
    }))

    console.log(categoriesData);
    
    await prisma.category.createMany({
        data: categoriesData
    })  

    // Relación
    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce((map, category) => {

        map[category.name.toLowerCase()] = category.id;

        return map;
    },{} as Record<string, string>)


    console.log(categoriesMap);

    // Productos
    services.forEach( async(service) => {

        const {images, type, ...rest} = service;

        const dbProduct = await prisma.service.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type]
            }
        })

        const imagesData = images.map( image => ({
            url: image,
            serviceId: dbProduct.id
        }));

        await prisma.serviceImage.createMany({
            data: imagesData
        })

    })

    
}

(() => {

    if (process.env.NODE_ENV === 'production') return;

    main();

})();