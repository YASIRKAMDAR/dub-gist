import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css';

//const store = createStore(reducers, {}, applyMiddleware(reduxThunk) );
const store = createStore(
    reducers,
    undefined,
    compose(
      applyMiddleware(reduxThunk),
      autoRehydrate()
    )
  )
  
// begin periodically persisting the store
persistStore(store, { blacklist: ['gists','forks'] });

ReactDOM.render(
    <Provider store={store}><App /></Provider> , 
    document.querySelector('#root')
);