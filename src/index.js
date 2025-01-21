import React from 'react';
import ReactDOM from 'react-dom/client';
// all in js
import TodoList from './TodoList';//App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);



