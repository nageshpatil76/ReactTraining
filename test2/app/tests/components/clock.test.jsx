var React = require('react');
var ReactDOM= require('react-dom');
var expect= require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');



var Clock = require('Clock');

describe('Clock',()=>{
it('should exist',()=>{
expect(Clock).toExist();
});
});

describe('render',()=>{
it('should render clock to output',()=> {
var clock=TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
var $e=$(ReactDOM.findDOMNode(clock));
var actualTest=$e.find('.clock-text').text();

expect(actualTest).toBe('01:02');

});
});


describe('formatSeconds',()=>{
it('should format seconds',()=> {
var clock=TestUtils.renderIntoDocument(<Clock/>);
var seconds= 615;
var expected= '10:15';
var actual= clock.formatSeconds(seconds);

expect(actual).toBe(expected);

});
});
