import React from 'react';
import ClassNames from 'classnames';

class AudioPlayer extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const playPauseClass = ClassNames({
			'fa fa-play': this.props.isPlaying === true ? false : true,
			'fa fa-pause': this.props.isPlaying === true ? true : false
		})
		return(
			<div className="player" >
				<button onClick={this.props.togglePlay}>
					<i className={playPauseClass}></i>
				</button>
				<div className="progress">
					{this.props.howlInstance &&
						<div>
							<span className="time-elapsed">
								{this.props.howlInstance._pos}
							</span>
							<progress max='1' value={this.props.howlInstance._onseek}></progress>
							<span>
								{this.props.howlInstance._duration}
							</span>
						</div>
					}
				</div>
			</div>
		)
	}
}

AudioPlayer.defaultProps = {
	howlInstance: {}
}

export default AudioPlayer;