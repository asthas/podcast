import { combineReducers } from 'redux';
import {
	REQUEST_PODCAST, RECEIVE_PODCAST, REQUEST_EPISODES, RECEIVE_EPISODES
} from './actions'

const podcasts = (state={
	isFetching: false,
	items: []
}, action) => {
	switch(action.type){
		case 'REQUEST_PODCAST': 
			return {
				...state,
				isFetching: true
			}
		case 'RECEIVE_PODCAST':
			return{
				...state,
				isFetching: false,
				items: action.podcasts,
				lastUpdated: action.receivedAt
			}
		default:
			return state;
	}
}

const navItems = (state = {
    viewHeads: [
        "featured",
        "popular",
        "trending"
    ],
    activeNavItem: "featured"
}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_NAV_ITEM':
      return Object.assign({}, state, {
          activeNavItem: action.viewHead
      });
    default:
      return state;
  }
}

const episodes = (state={
	isFetching: false,
	items:[]
}, action) => {
	switch(action.type){
		case 'REQUEST_PODCAST':
			return{
				...state,
				isFetching: true
			}
		case 'RECEIVE_EPISODES':
			return{
				...state,
				isFetching: false,
				items: action.episodes,
				lastUpdated: action.receivedAt
			}
		default:
			return state
	}
}


const reducers = combineReducers({
	podcasts,
	navItems,
	episodes
})

export default reducers