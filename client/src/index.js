import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Provider } from "react-redux"
import {BrowserRouter as Route} from "react-router-dom"

import { rootStore } from "./redux/store"

ReactDOM.render(
    <Provider store={rootStore}>
      <Route>
        <App />
      </Route>
    </Provider>,
  document.getElementById('root')
);
