import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const personsData = [
  { name: 'Zeyad', eyeColor: 'blue', age: 35 },
  { name: 'Ahmad', eyeColor: 'deepblue', age: 40 },
];

ReactDOM.render(
  <React.StrictMode>
    <App persons={personsData} />
  </React.StrictMode>,
  document.getElementById('root')
);
