import React from 'react';
import EpisodeList from './containers/EpisodeList';
import Player from './containers/Player';
import './css/EpisodesView.css'

const EpisodesView = () => (
	<div>
		<EpisodeList />
		<Player />
	</div>
)

export default EpisodesView;