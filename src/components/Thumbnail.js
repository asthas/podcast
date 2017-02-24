import React from 'react';
import { Link } from 'react-router'

const Thumbnail = ({
	thumbnail,
	title,
	url,
	id,
	onClick
}) => (
	<div className="podcast-item-container">
		<div className="thumbnail-container">
			<div className="thumbnail" >
				<Link to={`/podcast/${id}`}>
					<img src={thumbnail} onClick={onClick}/>
				</Link>
			</div>
			<div className="podcast-title">
				{title}
			</div>
		</div>
	</div>
)

export default Thumbnail;

