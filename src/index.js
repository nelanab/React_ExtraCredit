import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Offers from './offers';
import Suggestions from './suggestions';
import Tasks from './tasks';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Offers />
  </React.StrictMode>,
  document.getElementById('offers'),
  );

  
ReactDOM.render(
  <React.StrictMode>
    <Suggestions />
  </React.StrictMode>,
  document.getElementById('suggestions'),
  );

ReactDOM.render(
  <React.StrictMode>
    <Tasks />
  </React.StrictMode>,
  document.getElementById('tasks'),
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
