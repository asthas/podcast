import React, { Component } from 'react';
import Thumbnails from '../components/Thumbnails';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		podcasts: state.podcasts.items
	}
}

const ActiveView = connect(
	mapStateToProps
)(Thumbnails)

export default ActiveView;