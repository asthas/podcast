import React from 'react';
import ClassNames from 'classnames';

class AudioPlayer extends React.Component{
	constructor(props){
		super(props)
	}
	handleClick = (e) => {
			console.log(e)
	}

	renderPlayer(){
		return(
			<div className="player" >
				<button onClick={() => this.props.togglePlay(this.props.howlInstance)}>
					<i className={this.playPauseClass}></i>
				</button>
				<div className="player-controls">
					{this.props.howlInstance &&
						<div>
							<span className="time-elapsed">
								{this.props.howlInstance.seek()}
							</span>
							<div className="progress">
								<div className="progress-filed" value={this.props.howlInstance.seek()}>
								</div>
							</div>
							<span>
								{this.props.howlInstance.duration()}
							</span>
							<button data-skip="-10" onClick={(e) => this.handleClick(e)}>10</button>
							<button data-skip="25" onClick={(e) => this.handleClick(e)}>25</button>
						</div>
					}
				</div>
			</div>
		)
	}

	renderPlayerOrNot(){
		if(this.props.howlInstance){
			console.log(this.props.howlInstance)
			return this.renderPlayer()
		} else {
			console.log(this.props.howlInstance)
			return <div></div>
		}
	}
	render(){
		const playPauseClass = ClassNames({
			'fa fa-play': this.props.isPlaying === true ? false : true,
			'fa fa-pause': this.props.isPlaying === true ? true : false
		})
		return(
			<div>
				{() => this.renderPlayerOrNot()}
			</div>
		)
	}
}

export default AudioPlayer;