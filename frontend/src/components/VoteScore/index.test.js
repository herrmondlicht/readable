import { assert } from "chai";
import React from 'react';
import { createVoteScore } from "./index";
import { shallow } from "../../testUtils";
import {stub} from "sinon";

describe('VoteScore', () => {
  const VoteScore = createVoteScore(React),
    stubScoreUp = stub(),
    stubScoreDown = stub(),
    withDefaultProps = (props) => shallow(VoteScore).withProps({
      scoreUp: stubScoreUp,
      scoreDown: stubScoreDown,
    });
  
  it('must be a function', () => {
    assert.isFunction(VoteScore)
  });
  
  it('renders an FaArrowUp component', () => {
    const actual = withDefaultProps().find('FaArrowUp').length,
      expected =1;
    assert.equal(actual, expected, "Must render a FaArrowUp component");
  });
  
  it('renders an FaArrowDown component', () => {
    const actual = withDefaultProps().find('FaArrowDown').length,
      expected =1;
    assert.equal(actual, expected, "Must render a FaArrowDown component");
  });
});