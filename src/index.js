import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import countReducer from './reducers/countReducer';
import cartReducer from './reducers/cartReducer';
import { Auth0Provider } from "@auth0/auth0-react";

//REDUCER
const rootReducer = combineReducers({
  count: countReducer,
  cart: cartReducer
})

//STORE
const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-a3ecq-vy.au.auth0.com"
      clientId="n46tzzB9RQRV5rYvuSEMLsOjcDMmgT4i"
      redirectUri="http://localhost:3010/"

    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
