import React from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { connect } from 'react-redux';
import { togglePlayPause } from '../actions';

const mapStateToProps = (state) => {
	return {
		episode: state.audio.episode,
		howlInstance: state.audio.howlInstance,
		isPlaying: state.audio.isPlaying
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		togglePlay: (howlInstance) => {
			dispatch(togglePlayPause(howlInstance))
		}
	}
}

const Player = connect(
	mapStateToProps,
	mapDispatchToProps
)(AudioPlayer);

export default Player;