interface SeedService {
    slug: string;
    title: string;
    description: string;
    images: string[];
    type: ValidTypes;
    services: string;
}

type ValidTypes = 'prótesis sobre implante' | 'placas de ortodoncia' | 'metal porcelana' | 'libres de metal' | 'prótesis removibles' | 'temporales';

interface SeedData {
    categories : string[];
    services: SeedService[];
}



export const initialData: SeedData = {
    categories: [
        'prótesis sobre implante','placas de ortodoncia','metal porcelana','libres de metal','prótesis removibles','temporales',
    ],
    services: [
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
            type: 'temporales',
            services: ''
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
            type: 'prótesis sobre implante',
            services: ''
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
            type: 'prótesis sobre implante',
            services: ''
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
            type: 'metal porcelana',
            services: ''
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
            type: 'metal porcelana',
            services: ''
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
            type: 'prótesis removibles',
            services: ''
        },
    ]
};
