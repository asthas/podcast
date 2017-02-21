import React from 'react';
import ReactDOM from 'react-dom';
import PodcastApp from './App';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { fetchPodcasts } from './actions';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
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
