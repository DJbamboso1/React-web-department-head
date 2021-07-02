import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppTest from './AppTest';
import '../src/assets/css/app.min.css';
// import '../src/assets/css/vendor.min.css';
// import '../src/assets/js/app.min.js';
// import '../src/assets/js/vendor.min.js';

ReactDOM.render(
  <React.StrictMode>
    <AppTest />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
