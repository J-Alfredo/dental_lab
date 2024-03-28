
interface SeedService {
    slug: String;
    title: String;
    description: String;
    images: string[];
    category: ValidTypes;
}

type ValidTypes = 'Prótesis sobre implante' | 'Placas de ortodoncia' | 'Metal porcelana' | 'Libres de metal' | 'Prótesis removibles' | 'Temporales';

interface SeedData {
    categories : string[];
    products: SeedService[];
}



export const initialData: SeedData = {
    categories: [
        'Prótesis sobre implante','Placas de ortodoncia','Metal porcelana','Libres de metal','Prótesis removibles','Temporales'
    ],
    products: [
        {
            slug: 'Placas de ortodoncia',
            title: 'Placas de ortodoncia',
            description: "Nuestras placas de ortodoncia son dispositivos personalizados que corrigen la alineación dental, brindando una sonrisa más recta y una masticación mejorada con un enfoque en la comodidad del paciente. ",
            images: [
                '1.jpg',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                'service-image.jpg',
            ],
            category: 'Temporales'
        },
        {
            slug: 'Coronas sobre implantes',
            title: 'Coronas sobre implantes',
            description: "Las coronas sobre implantes son una solución estética y funcional para restaurar dientes individuales perdidos, proporcionando una apariencia natural y una masticación eficaz.",
            images: [
                '1.jpg',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                'service-image.jpg',
            ],
            category: 'Prótesis sobre implante'
        },
        {
            slug: 'Puentes sobre implantes',
            title: 'Puentes sobre implantes',
            description: "Los puentes sobre implantes son una opción confiable para reemplazar múltiples dientes perdidos, ofreciendo estabilidad, funcionalidad y estética mejorada para una sonrisa completa.",
            images: [
                '1.jpg',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                'service-image.jpg',
            ],
            category: 'Prótesis sobre implante'
        },
        {
            slug: 'Coronas dentales',
            title: 'Coronas dentales',
            description: "Las coronas dentales restauran la forma, función y apariencia de dientes dañados o debilitados, fortaleciéndolos y protegiéndolos para una salud dental óptima",
            images: [
                '1.jpg',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                'service-image.jpg',
            ],
            category: 'Metal porcelana'
        },
        {
            slug: 'Puentes dentales',
            title: 'Puentes dentales',
            description: "Los puentes dentales son una solución eficaz para reemplazar uno o más dientes perdidos, restaurando la función masticatoria y la estética dental con resultados duraderos y naturales.",
            images: [
                '1.jpg',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                'service-image.jpg',
            ],
            category: 'Metal porcelana'
        },
        {
            slug: 'Prótesis Flexibles',
            title: 'Prótesis Flexibles',
            description: "Nuestras prótesis flexibles se adaptan cómodamente a la boca del paciente, ofreciendo una solución duradera y estética para restaurar la función masticatoria y la sonrisa.",
            images: [
                '1.jpg',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                'service-image.jpg',
            ],
            category: 'Prótesis removibles'
        },
    ]
};
