import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
const createStoreWitMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(<Provider store={createStoreWitMiddleware(reducer, composeWithDevTools())}><App /></Provider>, document.getElementById('root'));
