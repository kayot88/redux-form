import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25
});

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
