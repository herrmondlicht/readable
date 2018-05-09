import {assert} from "chai";
import React from 'react';
import WithVoteScore from "./index";
import {shallow} from "../../testUtils";
import {stub} from "sinon";


describe('WithVoteScore', () => {
  it('type of WithVoteScore', () => {
    assert.isFunction(WithVoteScore, "WithVoteScore must be a function")
  })
  
  it('renders VoteScore with correct params', () => {
    const scoreUp = stub(),
      scoreDown = stub(),
      Component = () => <div>Test Component</div>,
      ComposedComponent = WithVoteScore({scoreUp, scoreDown}, Component),
      wrapper = shallow(ComposedComponent).withProps(),
      actual = wrapper.find('VoteScore').props(),
      expected = {
        scoreUp,
        scoreDown,
      };
    assert.deepEqual(actual, expected, 'WithVoteScore must render VoteScore with the correct props');
  });
  
  it('renders the component passed as parameter', () => {
    const scoreUp = stub(),
      scoreDown = stub(),
      CustomComponent = () => <div>Test Component</div>,
      ComposedComponent =  WithVoteScore({scoreUp, scoreDown}, CustomComponent),
      wrapper = shallow(ComposedComponent).withProps(),
      actual = wrapper.find('CustomComponent').length,
      expected = 1;
    assert.equal(actual, expected, 'WithVoteScore must render the component passed as parameter');
  });
  
});