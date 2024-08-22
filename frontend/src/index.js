import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './store/Store';
import {Provider} from 'react-redux';
ReactDOM.render(
  <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
