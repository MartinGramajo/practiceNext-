import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = +(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "take tiene que ser un numero" },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "skip tiene que ser un numero" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });

  return NextResponse.json(todos);
}



const postSchema = yup.object({
  title: yup.string().required(),
  complete: yup.boolean().optional().default(false),
})


export async function POST(request: Request) {
  // al tratarse de un metodo de creacion tenemos que trabajar con el body 
  try {
    const {complete, title} = await postSchema.validate(await request.json());
    const todo = await prisma.todo.create({data: {complete, title}  });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}


export async function DELETE(request: Request) {
  try {
    const todo = await prisma.todo.deleteMany({
      where:{complete:true}
     });
    return NextResponse.json({
      message:'borrados'
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}