import React from 'react';

/* Obsolete since it is in types.d.ts
interface Todo {
  text: string;
  complete: boolean;
}
*/

interface Props {
  todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={todo.complete} /> {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;