import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// 'ALL_CAPS' ==> this data will never change after being defined here. (convention)
const DATA = [
    {id: 'todo-0', name: 'Eat', completed: true},
    {id: 'todo-1', name: 'Sleep', completed: false},
    {id: 'todo-2', name: 'Repeat', completed: false},
]

const BUTTONS = [
    {id: 'btn-0', name: 'all'},
    {id: 'btn-1', name: 'active'},
    {id: 'btn-2', name: 'completed'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App subject="Saksham" tasks={DATA} buttons={BUTTONS}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();   // not needed for now
