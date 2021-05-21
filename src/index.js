import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(element, container[, callback])
ReactDOM.render(
  //StrictMode : 개발과정에서 도와주는 역할, 없어도 됨.
  <App />,
  document.getElementById('root')
);