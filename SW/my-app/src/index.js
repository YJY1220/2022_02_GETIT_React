import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './ch_02/Clock';
import CommentList from './ch_02_02/CommentList';
import NotificationList from './ch_03/NotificationList';
import Accommodate from './ch_03_02/Accommodate';
import ConfirmButton from './ch_04/ConfirmButton';
import LandingPage from './ch_04_02/LandingPage';
import AttendanceBook from './ch_05/AttendanceBook-1';
import SignUp from './ch_05_02/SignUp-2';

const root = ReactDOM.createRoot(document.getElementById('root'));

//ch_02
// setInterval(() => {
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );
// }, 1000)

//ch_02_02
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

//ch_03
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// );

//ch_03_02
// root.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>
// );

//ch_04
// root.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>
// )

//ch_04_02
// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>
// )

//ch_05
// root.render(
//   <React.StrictMode>
//     <AttendanceBook/>
//   </React.StrictMode>
// )

//ch_05_02
root.render(
  <React.StrictMode>
    <SignUp/>
  </React.StrictMode>
)

reportWebVitals();