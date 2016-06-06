var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => ({

	render: function() {
		const active = {
			fontWeight: 'bold'
		};

		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Timer App</li>
						<li><IndexLink to="/" activeClassName="active" activeStyle={active}>Timer</IndexLink></li>
						<li><Link to="/stopwatch" activeClassName="active" activeStyle={active}>Stopwatch</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">Created by <a href="http://www.agradeepk.com/" target="_blank">Agradeep K</a></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Nav;