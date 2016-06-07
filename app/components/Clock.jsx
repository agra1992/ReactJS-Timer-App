var React = require('react');

var Clock = React.createClass({
	getDefaultProps: function() {
		totalSecs: 0
	},

	propTypes: {
		totalSecs: React.PropTypes.number
	},

	formatTime: function(totalSecs) {
		var secs = totalSecs % 60;
		var mins = Math.floor(totalSecs / 60);

		if(secs < 10)
			secs = '0' + secs;

		if(mins < 10)
			mins = '0' + mins;

		return mins + ':' + secs;
	},

	render: function() {

		var {totalSecs} = this.props;

		return (
			<div className="clock">
				<span className="clock-content">{this.formatTime(totalSecs)}</span>
			</div>
		);
	}
});

module.exports = Clock;