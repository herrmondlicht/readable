import { assert } from "chai";
import React from 'react';
import { createPostDetails } from "./index";
import { shallow } from "../../../testUtils";

describe('PostListItem', () => {
  const PostDetails = createPostDetails(React)

  const renderWithRequired = (props) => shallow(PostDetails).withProps({
    match: {
      params: 'postId'
    },
    post: {},
    ...props,
  })

  it('typeof PostDetails', () => {
    assert.isFunction(PostDetails, 'PostDetails must be a function')
  })

  it('rendering of VoteScore with correct params', () => {
    const wrapper = renderWithRequired({}),
      VoteScoreProps = wrapper.find('VoteScore').props();
    assert.isFunction(VoteScoreProps.scoreUp, "VoteScore's scoreUp prop must be a function");
    assert.isFunction(VoteScoreProps.scoreDown, "VoteScore's scoreDown prop must be a function");
  })

  it('rendering of post body', () => {
    const body = 'this is the body of the post.',
      wrapper = renderWithRequired({ post: { body } }),
      actual = wrapper.text()
      assert.include(actual,body, "render() must render the post's body")
  })



})