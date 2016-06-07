var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
	render: function() {
		return (
			<div>
				<h1>CountdownJSX</h1>
				<Clock totalSecs={129} />
			</div>
		);
	}
});

module.exports = Countdown;