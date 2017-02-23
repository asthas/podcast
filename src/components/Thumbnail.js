import React from 'react';

const Thumbnail = ({
	thumbnail,
	title,
	url
}) => (
	<div className="podcast-item-container">
		<div className="thumbnail" >
			<a href={url} target="_blank">
				<img src={thumbnail} />
			</a>
		</div>
		<div className="podcast-title">
			{title}
		</div>
	</div>
)

export default Thumbnail;

