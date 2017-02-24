import React, { Component } from 'react';
import Thumbnails from '../components/Thumbnails';
import { connect } from 'react-redux';
import { fetchEpisodes } from '../actions';

const mapStateToProps = (state) => {
	return {
		podcasts: state.podcasts.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onThumbnailClick: (id) => {
			dispatch(fetchEpisodes(id))
		}
	}
}

const ActiveView = connect(
	mapStateToProps,
	mapDispatchToProps
)(Thumbnails)

export default ActiveView;