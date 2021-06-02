import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter
} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import reportWebVitals from './reportWebVitals';


import { save, load } from "redux-localstorage-simple"

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './Reducers'

const createStoreWithMiddleware
  = applyMiddleware(
    save() // Saving done here
  )(createStore)

const store = createStoreWithMiddleware(
  allReducers,
  load(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
