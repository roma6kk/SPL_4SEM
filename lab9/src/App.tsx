import React from 'react';
import AddTodoForm from './components/AddTodoForm.tsx';
import TodoList from './components/TodoList.tsx';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Список дел</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;