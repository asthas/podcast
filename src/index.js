import React from 'react';
import ReactDOM from 'react-dom';
import PodcastApp from './App';
import EpisodesView from './EpisodesView';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { fetchPodcasts } from './actions';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory} from 'react-router';
import './css/index.css';

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(fetchPodcasts('featured')).then(()=>
  console.log(store.getState())
)


ReactDOM.render(
	<Provider store={store}>
  	<Router history={browserHistory}>
      <Route path="/" component={PodcastApp} />
      <Route path="/podcast/(:id)" component={EpisodesView}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
