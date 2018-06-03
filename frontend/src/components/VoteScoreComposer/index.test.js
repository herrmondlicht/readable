import { assert } from "chai";
import React from 'react';
import WithVoteScore from "./index";
import { shallow } from "../../testUtils";
import { stub } from "sinon";


describe('WithVoteScore', () => {
  it('type of WithVoteScore', () => {
    assert.isFunction(WithVoteScore, "WithVoteScore must be a function")
  })

  it('renders VoteScore with correct params', () => {
    const scoreHandlerFunction = stub(),
      id = 'sh1238vnasbm12',
      Component = () => <div>Test Component</div>,
      ComposedComponent = () => WithVoteScore({ id, scoreHandlerFunction }, Component),
      wrapper = shallow(ComposedComponent).withProps(),
      actual = wrapper.find('VoteScore').props(),
      expected = {
        id,
        voteScoreHandler: scoreHandlerFunction,
      };
    assert.deepEqual(actual, expected, 'WithVoteScore must render VoteScore with the correct props');
  });

  it('renders the component passed as parameter', () => {
    const scoreHandlerFunction = stub(),
      id = 'sh1238vnasbm12',
      CustomComponent = () => <div>Test Component</div>,
      ComposedComponent = () => WithVoteScore({ id, scoreHandlerFunction }, <CustomComponent />),
      wrapper = shallow(ComposedComponent).withProps(),
      actual = wrapper.find('CustomComponent').length,
      expected = 1;
    assert.equal(actual, expected, 'WithVoteScore must render the component passed as parameter');
  });

});