import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Chat_Page from './pages/Chat_Page/Chat_Page';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Chat_Page />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();