import React from 'react';
import ReactDOM from 'react-dom';
import PodcastApp from './App';
import thunkMiddleWare from 'redux-thunk';
import createLogger from 'redux-logger';
import fetchPodcasts from './actions';
import reducers from './reducers';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleWare(
    thunkMiddleWare,
    loggerMiddleware
  )
);

store.dispatch(fetchPodcasts('popular')).then(()=>
  console.log(store.getState())
)


ReactDOM.render(
	<Provider store={store}>
  	<PodcastApp />
  </Provider>,
  document.getElementById('root')
);
