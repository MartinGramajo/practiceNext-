import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {


    await prisma.todo.deleteMany();

  const todo = await prisma.todo.createMany({
    data: [
      { title: "Sagrada", complete: true },
      { title: "Cartografos" },
      { title: "Agricola" },
      { title: "Catan" },
      { title: "Azul" },
    ],
  });
  console.log("🚀 ~ GET ~ todo:", todo);

  return NextResponse.json({
    message: "Seed Executed",
  });
}