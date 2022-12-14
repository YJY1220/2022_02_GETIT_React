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
import Calculator from './ch_06/Calculator';
import ProfileCard from './ch_06_02/ProfileCard';
import DarkOrLight from './ch_07/DarkOrLight';
import Blocks from './ch_08/Blocks';

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
// root.render(
//   <React.StrictMode>
//     <SignUp/>
//   </React.StrictMode>
// )

//ch_06
// root.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>
// );

//ch_06_02
// root.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>
// );

//ch_07
//안 돌아가는 코드
// ReactDOM.render(
//   <React.StrictMode>
//     <DarkOrLight />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//ch_07
// root.render(
//   <React.StrictMode>
//     <DarkOrLight />
//   </React.StrictMode>
//   //document.getElementById('root')
// );

//ch_08
root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
)

reportWebVitals();