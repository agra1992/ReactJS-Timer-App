var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	describe('onSetCountdown', () => {
		it('should set state to started and countdown by 1', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.onSetCountdown(10);

			expect(countdown.state.intSecs).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.intSecs).toBe(9);
				done();
			}, 1001);

		});

		it('should never be negative', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.onSetCountdown(1);

			expect(countdown.state.intSecs).toBe(1);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.intSecs).toBe(0);
				done();
			}, 3001);

		});
	});
});
