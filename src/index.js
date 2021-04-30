import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppleHeader from './Components/Final-apple/AppleHeader';
// import Alert from './Components/Final-apple/Alert'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

ReactDOM.render(<App />, document.getElementById ("root"));
reportWebVitals();

