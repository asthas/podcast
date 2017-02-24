import React from 'react';
import { connect } from 'react-redux';
import Episodes from '../components/Episodes';

const mapStateToProps = (state) => {
	return {
		episodes: state.episodes.items,
	}
}

const EpisodeList = connect(
	mapStateToProps
)(Episodes);

export default EpisodeList;