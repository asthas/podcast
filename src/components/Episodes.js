import React from 'react';
import Episode from './Episode';

const Episodes = ({
	episodes,
	onEpisodeClick
}) => (
	<div className="episode-list">
		{episodes.map(episode=>
			<Episode 
				key={episode.id}
				url={episode.url}
				title={episode.title}
				duration={episode.duration}
				id={episode.id}
				isVideo={episode.isVideo}
				publishedAt={episode.publishedAt}
				onClick={()=>onEpisodeClick(episode)}
			/>
		)}
	</div>
)

export default Episodes;