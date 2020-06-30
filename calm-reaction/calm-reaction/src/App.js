// import component from react library
import React, { Component } from 'react';
// import CSS stylesheet
import './App.css';

// sets up App class from component
class App extends Component {
	// constructor for App, taking in props
	constructor(props) {
		super(props);
		// assign initial states for audio playback, nightmode and focus
		this.state = {
			isAudioPlaying: false,
			isNightMode: false,
			meditationFocus: 'Set meditation focus'
		};

		// define url for audio source
		this.url = 'https://www.bensound.com/bensound-music/bensound-relaxing.mp3';
		// define new audio playback from the url above
		this.audio = new Audio(this.url);
	}
	// toggle audio on and off function
	toggleAudio = () => {
		// if playback is off/paused, change to on
		if (this.state.isAudioPlaying === false) {
			this.setState({
				isAudioPlaying: true
			});
			// play audio track
			this.audio.play();
			// else if playback is on, change to off
		} else {
			this.setState({
				isAudioPlaying: false
			});
			// pause audio track
			this.audio.pause();
		}
		// console.log(this.state.isAudioPlaying); // test for audio toggle
	};

	toggleNightMode = () => {
		// if (this.state.isNightMode === false) {
		// 	this.setState({
		// 		isNightMode: true
		// 	});
		// } else {
		// 	this.setState({
		// 		isNightMode: false
		// 	});
		// }
		// easy toggle!
		this.setState({ isNightMode: !this.state.isNightMode });
	};

	toggleFocus = () => {
		const focusPoints = [
			'gratitude',
			'wellbeing',
			'peace',
			'serenity',
			'balance',
			'growth',
			'transience',
			'happiness',
			'inspiration',
			'kindness'
		];

		const currentFocus = this.state.meditationFocus;
		const focusIndex = focusPoints.indexOf(currentFocus);
		console.log(focusIndex);

		// 1. focusIndex = -1 : Set to [0]
		if (focusIndex >= 0 && focusIndex < focusPoints.length - 1) {
			const iterator = focusIndex + 1;
			this.setState({
				meditationFocus: focusPoints[iterator]
			});
			// 2. focusIndex = not present, back to [0]
		} else {
			this.setState({
				meditationFocus: focusPoints[0]
			});
		}
	};
	// app render for display in browser
	render() {
		const isNightMode = this.state.isNightMode;
		const meditationFocus = this.state.meditationFocus;
		const nightModeMessage = isNightMode ? '🌙' : '☀️';
		return (
			// main app container
			<div className={isNightMode ? `container nightmode` : `container`}>
				{/* button taking on toggleAudio click event for play/pause */}
				<input
					onClick={this.toggleNightMode}
					type='checkbox'
					id='nightmode'
					checked={isNightMode}
				/>
				<div className='nightmoji'>
					<p>{nightModeMessage}</p>
				</div>
				<button onClick={this.toggleAudio}>Play</button>
				<p>{meditationFocus}</p>
				<button onClick={this.toggleFocus}>Choose Focus</button>
			</div>
		);
	}
}
// export App for use
export default App;
