import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma';

interface Segments {
    params: {
        id: string;
    }
}

export async function GET(request: Request, { params }:Segments) { 

    const { id } = params;

    const service = await prisma.service.findFirst({where: { id } });

    if ( !service ){ 
        return NextResponse.json({ message: `id ${id} no encontrado` }, { status: 404 });
    }

    return NextResponse.json(service)

}
