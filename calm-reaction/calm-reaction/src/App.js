import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAudioPlaying: false,
			isNightMode: false,
			meditationFocus: 'Set meditation focus',
		};
		this.toggleAudio = this.toggleAudio.bind(this);
		this.url = 'https://www.bensound.com/bensound-music/bensound-relaxing.mp3';
		this.audio = new Audio(this.url);
	}
	toggleAudio() {
		if (this.state.isAudioPlaying === false) {
			this.setState({
				isAudioPlaying: true,
			});
			this.audio.play();
		} else {
			this.setState({
				isAudioPlaying: false,
			});
			this.audio.pause();
		}
		console.log(this.state.isAudioPlaying);
	}
	render() {
		return (
			<div className='container'>
				<button onClick={this.toggleAudio}>Play</button>
			</div>
		);
	}
}

export default App;
