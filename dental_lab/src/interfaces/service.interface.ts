export interface Service {
    // id: string;
    slug: string;
    title: string;
    description: string;
    images: string[];
    type: ValidTypes;
    services: string;
}

export type ValidTypes = 'prótesis sobre implante' | 'placas de ortodoncia' | 'metal porcelana' | 'libres de metal' | 'prótesis removibles' | 'temporales';
