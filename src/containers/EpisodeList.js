import React from 'react';
import { connect } from 'react-redux';
import Episodes from '../components/Episodes';
import { playEpisode } from '../actions';

const mapStateToProps = (state) => {
	return {
		episodes: state.episodes.items,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onEpisodeClick: (url) => {
			dispatch(playEpisode(url))
		}
	}
}

const EpisodeList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Episodes);

export default EpisodeList;