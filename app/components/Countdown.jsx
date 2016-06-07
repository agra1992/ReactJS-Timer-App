var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({

	getInitialState: function() {
		return {
			intSecs: 0,
			countdownStatus: 'stopped'
		};
	},

	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({
						intSecs: 0
					});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.intSecs - 1;
			this.setState({
				intSecs: newCount >= 0 ? newCount : 0
			});

		}, 1000);
	},

	onSetCountdown: function(data) {

		this.setState({
			intSecs: data,
			countdownStatus: 'started'
		});
	},

	onStatusChange: function(newStatus) {
		this.setState({
			countdownStatus: newStatus
		});
	},

	render: function() {

		var {intSecs, countdownStatus} = this.state;

		var renderControlArea = () => {
			if(countdownStatus !== 'stopped') {
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.onStatusChange}/>
			} else {
				return <CountdownForm onSetCountdown = {this.onSetCountdown}/>
			}
		};

		return (
			<div>
				<h1>CountdownJSX</h1>
				<Clock totalSecs={intSecs} />
				{renderControlArea()}
			</div>
		);
	}
});

module.exports = Countdown;