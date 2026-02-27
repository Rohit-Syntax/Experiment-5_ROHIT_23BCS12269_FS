import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/todos/todosSlice';

function TodoList() {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            onClick={() => dispatch(toggleTask(task.id))}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch(deleteTask(task.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
