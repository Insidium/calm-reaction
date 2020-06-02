// import component from react library
import React, { Component } from 'react';

// sets up App class from component
class App extends Component {
	// constructor for App, taking in props
	constructor(props) {
		super(props);
		// assign initial states for audio playback, nightmode and focus
		this.state = {
			isAudioPlaying: false,
			isNightMode: false,
			meditationFocus: 'Set meditation focus',
		};
		// bind the this keyword for use on toggleAudio
		this.toggleAudio = this.toggleAudio.bind(this);
		// define url for audio source
		this.url = 'https://www.bensound.com/bensound-music/bensound-relaxing.mp3';
		// define new audio playback from the url above
		this.audio = new Audio(this.url);
	}
	// toggle audio on and off function
	toggleAudio() {
		// if playback is off/paused, change to on
		if (this.state.isAudioPlaying === false) {
			this.setState({
				isAudioPlaying: true,
			});
			// play audio track
			this.audio.play();
			// else if playback is on, change to off
		} else {
			this.setState({
				isAudioPlaying: false,
			});
			// pause audio track
			this.audio.pause();
		}
		// console.log(this.state.isAudioPlaying); // test for audio toggle
	}
	// app render for display in browser
	render() {
		return (
			// main app container
			<div className='container'>
				{/* button taking on toggleAudio click event for play/pause */}
				<button onClick={this.toggleAudio}>Play</button>
			</div>
		);
	}
}
// export App for use
export default App;