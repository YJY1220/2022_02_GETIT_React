import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './ch_02/Clock';
import CommentList from './ch_02_02/CommentList';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );
// }, 1000)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
reportWebVitals();
