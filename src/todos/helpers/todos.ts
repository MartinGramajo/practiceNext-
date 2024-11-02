import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  // 1. Para el update tenemos que hacer match de nuestro parámetros con el body
  // es decir, el complete nuestro con el complete de la base.
  const body = { complete };

  // 2. Hacemos la petición HTTP con el método PUT
  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((resp) => resp.json());

  // 3. retornamos el todo
  return todo;
};

export const createTodo = async (title: string): Promise<Todo> => {
  // 1. Para el update tenemos que hacer match de nuestro parámetros con el body
  // es decir, el complete nuestro con el complete de la base.
  const body = { title };

  // 2. Hacemos la petición HTTP con el método post
  const todo = await fetch(`/api/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((resp) => resp.json());

  // 3. retornamos el todo
  return todo;
};

export const deleteTodo = async (): Promise<Todo> => {

  // 1. Hacemos la petición HTTP con el método DELETE
  const todo = await fetch(`/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

  // 2. retornamos el todo
  return todo;
};


export const refreshTodo = async (): Promise<Todo> => {


  // 1. Hacemos la petición HTTP con el método PUT
  const todo = await fetch(`/api/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

  // 2. retornamos el todo
  return todo;
};