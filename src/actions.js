import fetch from 'isomorphic-fetch';

export const REQUEST_PODCAST = 'REQUEST_PODCAST';
export const RECEIVE_PODCAST = 'RECEIVE_PODCAST';
export const REQUEST_EPISODES = 'REQUEST_EPISODES';
export const RECEIVE_EPISODES = 'RECEIVE_EPISODES';

const requestPodcasts = (typeOfPodcast) => {
	return {
		type: 'REQUEST_PODCAST',
		typeOfPodcast
	}
}


const receivePodcasts = (typeOfPodcast, json) => {
	return {
		type: 'RECEIVE_PODCAST',
		typeOfPodcast,
		podcasts: json.data,
		receivedAt: Date.now()
	}
}



export const setActiveNavItem = (viewHead) => {
	return {
		type: 'SET_ACTIVE_NAV_ITEM',
		viewHead
	}
}

export const requestEpisodes = (id) => {
	return{
		type: 'REQUEST_EPISODES',
		id
	}
}

export const receiveEpisodes = (id, json) => {
	return{
		type: 'RECEIVE_EPISODES',
		id,
		episodes: json.data,
		receivedAt: Date.now()
	}
}

//Thunk action creator. Helps action to return function instead of action objects

export const fetchPodcasts = (typeOfPodcast) => {
	return (dispatch) => {
		dispatch(requestPodcasts(typeOfPodcast))
		return fetch(`https://api.podcst.io/${typeOfPodcast}`)
		.then(response => response.json())
		.then(json => dispatch(receivePodcasts(typeOfPodcast, json)))
	}
}

export const fetchEpisodes = (id) => {
	return (dispatch) => {
		dispatch(requestEpisodes(id))
		return fetch(`https://api.podcst.io/episodes?id=${id}`)
		.then(response => response.json())
		.then(json => dispatch(receiveEpisodes(id, json)))
	}
}

export const playEpisode = (episode) => {
	return{
		type: 'PLAY_EPISODE',
		episode
	}
}

export const pauseEpisode = (episode) => {
	return{
		type: 'PAUSE_EPISODE',
		episode
	}
}

export const togglePlayPause = (howlInstance) => {
	return{
		type: 'TOGGLE_PLAY_PAUSE',
		howlInstance
	}
}