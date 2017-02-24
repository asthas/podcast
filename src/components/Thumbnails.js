import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = ({
	podcasts,
	onThumbnailClick
}) => (
	<div className="thumbnails-list" >
		{podcasts.map(podcast => 
			<Thumbnail 
				key={podcast.thumbnail}
				thumbnail={podcast.thumbnail}
				title={podcast.title}
				url={podcast.url}
				id={podcast.id}
				onClick={()=>onThumbnailClick(podcast.id)}
			/>
		)}
	</div>
)

export default Thumbnails;


