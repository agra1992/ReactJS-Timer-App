var React = require('react');

var CountdownForm = React.createClass({
	
	onSubmit: function(event) {
		event.preventDefault();
		var strSecs = this.refs.inputSecs.value;
		
		if(strSecs.match(/^[0-9]*$/) && strSecs.length > 0 && parseInt(strSecs, 10) !== 0) {
			this.props.onSetCountdown(parseInt(strSecs, 10));
		}

		this.refs.inputSecs.value = '';
	},

	render: function() {
		return (
			<div>
				<form ref="form" className="countdown-form" onSubmit={this.onSubmit}>
					<input type="text" ref="inputSecs" placeholder="Please enter a time in seconds..." />
					<button className="button expanded hollow">Start Countdown</button>
				</form>
			</div>
		);
	}
});

module.exports = CountdownForm;