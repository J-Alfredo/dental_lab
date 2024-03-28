import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.service.deleteMany();

    await prisma.service.createMany({
        data: [
            {title: 'Servicio 1', description: 'descripción 1', services: 'lista 1', image:'123123123'},
            {title: 'Servicio 2', description: 'descripción 2', services: 'lista 2', image:'123123123'},
            {title: 'Servicio 3', description: 'descripción 3', services: 'lista 3', image:'123123123'},
        ]
    })


  return NextResponse.json({ message: 'Seed Executed'});
}