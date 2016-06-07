var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

	getInitialState: function() {
		return { intSecs: 0 };
	},

	onSetCountdown: function(data) {

		this.setState({
			intSecs: data
		});
	},

	render: function() {

		var {intSecs} = this.state;
		return (
			<div>
				<h1>CountdownJSX</h1>
				<Clock totalSecs={intSecs} />
				<CountdownForm onSetCountdown = {this.onSetCountdown} />
			</div>
		);
	}
});

module.exports = Countdown;