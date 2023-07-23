import React, { useState } from 'react';
import TodoCount from './TodoCount';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoApp = () => {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <TodoCount count={todos.length} />
      <TodoList todos={todos} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

export default TodoApp;
