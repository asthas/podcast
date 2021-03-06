import { combineReducers } from 'redux';
import {
	REQUEST_PODCAST, RECEIVE_PODCAST, REQUEST_EPISODES, RECEIVE_EPISODES
} from './actions';
import { Howl } from 'howler';

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

const audio = (state={
	isPlaying: false,
	howlInstance: null,
	episode: null
}, action) => {
	switch(action.type){
		case 'PLAY_EPISODE':
			const audioInstance = new Howl({
				src: [action.episode.url]
			})
			audioInstance.play() 
			return {
				...state,
				isPlaying: true,
				howlInstance: audioInstance,
				episode: action.episode
			}
		case 'TOGGLE_PLAY_PAUSE':
			if (state.isPlaying)
				action.howlInstance.pause()
			else
				action.howlInstance.play()	
			return{
				...state,
				howlInstance: action.howlInstance,
				isPlaying: state.isPlaying === true ? false : true
			}
		case "PAUSE_EPISODE":
			action.howlInstance.pause()
			return{
				...state,
				isPlaying: false,
				howlInstance: action.howlInstance,
				episode: action.episode
			}
		default:
			return state
	}
}


const reducers = combineReducers({
	podcasts,
	navItems,
	episodes,
	audio
})

export default reducers