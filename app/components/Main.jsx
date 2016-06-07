var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
	return (
		<div>
			<div>
				<Nav />
				<p>MainJSX Rendered</p>
				<div>
					{ props.children }
				</div>
			</div>
		</div>
	);
}

module.exports = Main;