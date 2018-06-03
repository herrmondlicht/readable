import { assert } from "chai";
import React from 'react';
import { createVoteScore } from "./index";
import { shallow } from "../../testUtils";
import { stub } from "sinon";

describe('VoteScore', () => {
  const VoteScore = createVoteScore(React),
    voteScoreHandler = stub(),
    renderWithDefaultProps = (props) => shallow(VoteScore).withProps({
      voteScoreHandler
    });

  beforeEach(() => {
    voteScoreHandler.reset()
  })

  it('must be a function', () => {
    assert.isFunction(VoteScore)
  });

  it('rendering of a FaArrowUp component', () => {
    const actual = renderWithDefaultProps().find('FaArrowUp').length,
      expected = 1;
    assert.equal(actual, expected, "Must render a FaArrowUp component");
  });

  it('rendering of a FaArrowDown component', () => {
    const actual = renderWithDefaultProps().find('FaArrowDown').length,
      expected = 1;
    assert.equal(actual, expected, "Must render a FaArrowDown component");
  });

  it('return of getVoteScoreFunction function', () => {
    const wrapper = renderWithDefaultProps(),
      getVoteScoreFunction = wrapper.instance().getVoteScoreFunction,
      actual = getVoteScoreFunction()
    assert.isFunction(actual, 'getVoteScoreFunction() must return a function')
  })

  it('call of the returned function from getVoteScoreFunction', () => {
    const optionParam = 'upVote',
      id = '8xf0y6ziyjabvozdd253nd',
      wrapper = renderWithDefaultProps(),
      getVoteScoreFunction = wrapper.instance().getVoteScoreFunction,
      expected = 'correct return';
    voteScoreHandler.withArgs(id, optionParam).returns(expected);
    const actual = getVoteScoreFunction(id, optionParam)();

    assert.equal(actual, expected, 'must call the returned function with correct params')

  })

  it("rendering of div with a click function as FaArrowUp parent", () => {
    const wrapper = renderWithDefaultProps(),
    actualProps = wrapper.find('FaArrowUp').parent().props();
    assert.isFunction(actualProps.onClick, "render() must render the FaArrowUp parent with a click function")
  })

  it("rendering of div with a click function as FaArrowDown parent", () => {
    const wrapper = renderWithDefaultProps(),
    actualProps = wrapper.find('FaArrowDown').parent().props();
    assert.isFunction(actualProps.onClick, "render() must render the FaArrowDown parent with a click function")
  })
});