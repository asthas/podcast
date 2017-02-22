import fetch from 'isomorphic-fetch';

export const REQUEST_PODCAST = 'REQUEST_PODCAST';

const requestPodcasts = (typeOfPodcast) => {
	return {
		type: 'REQUEST_PODCAST',
		typeOfPodcast
	}
}

export const RECEIVE_PODCAST = 'RECEIVE_PODCAST';

const receivePodcasts = (typeOfPodcast, json) => {
	return {
		type: 'RECEIVE_PODCAST',
		typeOfPodcast,
		podcasts: json.data.podcasts,
		receivedAt: Date.now()
	}
}

export const setActiveNavItem = (viewHead) => {
	return {
		type: 'SET_ACTIVE_NAV_ITEM',
		viewHead
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