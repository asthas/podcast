import React from 'react';
import moment from 'moment';

const Episode = ({
	url,
	title,
	duration, 
	id, 
	isVideo,
	publishedAt
}) => (
	<div className="episode-container">
		<div className="episode-title">
			{title}
		</div>
		<div>
			<i className="fa fa-play-circle-o"></i>
		</div>
		<div className="episode-publish-date">
			{moment(publishedAt).format("DD MMM YYYY hh:mm a")}
		</div>
		<div className="episode-duration">
			{moment(duration).format('hh:mm:ss')}
		</div>
	</div>
)

export default Episode;