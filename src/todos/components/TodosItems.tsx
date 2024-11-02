import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
        <div
          className={`
            flex p-2 rounded-md cursor-pointer 
            hover:bg-opacity-60 
            bg-blue-100
            `}
        >
          <IoCheckboxOutline size={30} />
        </div>
        <div className="text-center sm:text-left">{todo.title}</div>
      </div>
    </div>
  );
};

export default TodoItem;