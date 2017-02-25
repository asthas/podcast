import React from 'react';
import ClassNames from 'classnames';

class AudioPlayer extends React.Component{
	render(){
		const playPauseClass = ClassNames({
			'fa fa-play': this.props.isPlaying === true ? false : true,
			'fa fa-pause': this.props.isPlaying === true ? true : false
		})
		return(
			<div>
				<div>
					<i className={playPauseClass} onClick={this.props.togglePlay}></i>
				</div>
				<div className="progress">
					<span className="time-elapsed">
						{this.props.howlInstance._onseek}
					</span>
					<progress max='1' value={this.props.howlInstance._pos}></progress>
					<span>
						{this.props.howlInstance._duration}
					</span>
				</div>
			</div>
		)
	}
	
}

export default AudioPlayer;