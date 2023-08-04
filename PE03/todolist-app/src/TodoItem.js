import React from 'react';

const TodoItem = ({ index, todo, onDeleteTodo }) => {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => onDeleteTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
