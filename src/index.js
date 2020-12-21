import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import App2 from './App2'
// import BenAwadExample1 from './benAwadExample1'
// import BenAwadExample2 from './benAwadExample2'
// import BenAwadNumbersAPI from './benAwadNumbersAPI'
import Counter from './counter'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 />  */}
    {/* <BenAwadExample1 /> */}
    {/* <BenAwadExample2 /> */}
    {/* < BenAwadNumbersAPI /> */}
    < Counter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
