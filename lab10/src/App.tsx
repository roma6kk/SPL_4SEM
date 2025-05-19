import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import AddTodoForm from './components/AddTodoForm.tsx';
import TodoList from './components/TodoList.tsx';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Список дел</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;