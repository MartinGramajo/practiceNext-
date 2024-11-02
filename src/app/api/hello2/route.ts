import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  return NextResponse.json({
    hola: 'Hello, Next.js!'
  })
}

export async function POST(request: Request) { 

    return NextResponse.json({
      hola: 'Hello, Next.js but method POST!'
    })
  }