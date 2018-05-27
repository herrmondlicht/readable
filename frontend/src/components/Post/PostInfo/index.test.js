import { assert } from "chai";
import React from 'react';
import { createPostInfo } from "./index";
import { shallow } from "../../../testUtils";
import moment from 'moment';

describe('PostInfo', () => {
  const PostInfo = createPostInfo(React)

  const renderWithRequired = (props) => shallow(PostInfo).withProps({ postId: 123, ...props })

  it('must be a function', () => {
    assert.isFunction(PostInfo)
  })

  it('rendering of comments quantity', () => {
    const commentCount = 35,
      wrapper = renderWithRequired({ commentCount }),
      actual = wrapper.text()

    assert.include(actual, commentCount, 'render() should display the comments quantity')
  })

  it('rendering of formatted date', () => {
    const timestamp = 1525202495860,
      expected = moment(timestamp).fromNow(),
      wrapper = renderWithRequired({ timestamp }),
      actual = wrapper.text()
    assert.include(actual, expected, 'render() must render the timestamp as fromNow date')
  })

  it('rendering of authors name', () => {
    const author = 'John Doe',
      wrapper = renderWithRequired({ author }),
      actual = wrapper.text()
    assert.include(actual, author, 'render() must render the timestamp as fromNow date')
  })

  it('rendering of voteScore label', () => {
    const voteScore = 10,
      wrapper = renderWithRequired({ voteScore }),
      actual = wrapper.text()
    assert.include(actual, voteScore, 'render() must render the votescore when passed')
  })

  it('rendering of VoteScore', () => {
    const wrapper = renderWithRequired(),
      VoteScoreProps = wrapper.find('VoteScore').props(),
      postScoreHandler = wrapper.instance().postScoreHandler;

    assert.equal(VoteScoreProps.scoreUp, postScoreHandler, 'render() must render a VoteScore with the correct scoreUp method')
    assert.equal(VoteScoreProps.scoreDown, postScoreHandler, 'render() must render a VoteScore with the correct scoreDown method');
  })
})