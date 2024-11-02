import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

interface Segments {
    params:{
        id: string
    }
}


export async function GET(request: Request, {params}: Segments) { 

    // 1. tomamos el id de los params 
    const {id} = params; 
    
    // 2. Buscamos el todo que coincida con el params.id 
    
    const todo = await prisma.todo.findFirst({
        where:{
            id,
        }
    })

    // 2. Verificamos su existencia 
    if( !todo ){
        return NextResponse.json({ message: `todo con id ${id} no existe ` },
            { status: 404 })
    }

    // 3. Retornamos el todo 
    return NextResponse.json(todo)
}