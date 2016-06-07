var React = require('react');

var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string.isRequired
	},

	render: function() {
		var {countdownStatus} = this.props;
		var renderButtons = () => {
			if(countdownStatus === 'started') {
				return <button className="button secondary hollow">Pause</button>
			} else if(countdownStatus === 'paused') {
				return <button className="button primary hollow">Start</button>
			}
		};

		return (
			<div className="controls">
				{renderButtons()}
				<button className="button alert hollow">Clear</button>
			</div>
		);
	}
});

module.exports = Controls;