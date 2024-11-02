import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });
  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  // 1. tomamos el id de los params
  const { id } = params;

  // 2. Buscamos el todo que coincida con el params.id

  //   const todo = await prisma.todo.findFirst({
  //     where: {
  //       id,
  //     },
  //   });

  // 2. Simplificamos el codigo de arriba creando una función
  const todo = await getTodo(id);

  // 2. Verificamos su existencia
  if (!todo) {
    return NextResponse.json(
      { message: `todo con id ${id} no existe ` },
      { status: 404 }
    );
  }

  // 3. Retornamos el todo
  return NextResponse.json(todo);
}

const putSchema = yup.object({
  title: yup.string().optional(),
  complete: yup.boolean().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  // 1. tomamos el id de los params
  const { id } = params;

  // 2. Buscamos el todo que coincida con el id
    const todo = await getTodo(id);

  // 2. Verificamos su existencia
  if (!todo) {
    return NextResponse.json(
      { message: `todo con id ${id} no existe ` },
      { status: 404 }
    );
  }

  try {
    // 3. Actualizar TODO - al actualizar trabajamos con el body

    const { complete, title, ...rest } = await putSchema.validate(
      await request.json()
    );
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, title },
    });

    // 4. Retornamos el todo actualizado
    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
