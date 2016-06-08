var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should start timer on start', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);

		timer.onStatusChange('started');

		expect(timer.state.intSecs).toBe(0);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('started');
			expect(timer.state.intSecs).toBe(1);
			done();
		}, 1001);
	});

	it('should pause timer on pause', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);

		timer.setState({ intSecs: 10 });
		timer.onStatusChange('started');
		timer.onStatusChange('paused');

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('paused');
			expect(timer.state.intSecs).toBe(10);
			done();
		}, 1001);
	});

	it('should reset timer on stopped', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);

		timer.setState({ intSecs: 10 });
		timer.onStatusChange('started');
		timer.onStatusChange('stopped');

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('stopped');
			expect(timer.state.intSecs).toBe(0);
			done();
		}, 1001);
	});
});