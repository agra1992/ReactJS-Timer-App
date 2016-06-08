var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

	getInitialState: function() {
		return {
			intSecs: 0,
			timerStatus: 'stopped'
		};
	},

	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
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

	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.intSecs + 1;
			this.setState({
				intSecs: newCount
			});
		}, 1000);
	},

	onStatusChange: function(newStatus) {
		this.setState({
			timerStatus: newStatus
		});
	},

	render: function() {
		var {intSecs, timerStatus} = this.state;
		
		return (
			<div>
				<h1 className="page-title">Countdown App</h1>
				<Clock totalSecs={intSecs} />
				<Controls countdownStatus={timerStatus} onStatusChange={this.onStatusChange}/>
			</div>
		);
	}
});

module.exports = Timer;