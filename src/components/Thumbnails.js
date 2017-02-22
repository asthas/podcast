import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = ({
	podcasts
}) => (
	<div className="thumbnails-container" >
		{podcasts.map(podcast => 
			<Thumbnail 
				key={podcast.thumbnail}
				thumbnail={podcast.thumbnail}
			/>
		)}
	</div>
)

export default Thumbnails;


