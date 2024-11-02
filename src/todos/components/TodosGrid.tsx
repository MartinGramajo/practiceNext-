import { Todo } from '@prisma/client'
import React from 'react'
import TodoItem from './TodosItems'


interface Props {
    todos: Todo[]
}


const TodosGrid = ({todos = []}:Props) => {
  return (
    <div className="gird grid-cols-1 sm:grid-cols-3 gap-2">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </div>
  )
}

export default TodosGrid
