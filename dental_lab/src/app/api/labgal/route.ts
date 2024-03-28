import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    const { searchParams } = new URL(request.url)
    const take = Number( searchParams.get('take') ?? '10');
    const skip = Number( searchParams.get('skip') ?? '0');
    
    if ( isNaN(take) ){ 
      return NextResponse.json({ message: 'Take tiene que ser un número' }, { status: 400 });
    }
    
    if ( isNaN(skip) ){ 
      return NextResponse.json({ message: 'Skip tiene que ser un número' }, { status: 400 });
    }
    
    const services = await prisma.service.findMany({
      take: take,
      skip: skip,
    });
    
    return NextResponse.json( services );

}

export async function POST(request: Request) { 

    const body = await request.json();

    const service = await prisma.service.create({data : body})

    return NextResponse.json(service)

}