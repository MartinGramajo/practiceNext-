import prisma from "@/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";


export const metadata = {
  title: "Listado de Todos",
  description: "SEO Title",
};

export default async function RestTodoPage() {

  // Traemos los TODO utilizando prisma 

  const todos = await prisma.todo.findMany({
    orderBy: { title: "asc" },
  });

  return (
    <div>
        <TodosGrid todos={todos} />
    </div>
  );
}