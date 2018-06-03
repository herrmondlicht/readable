import { assert } from "chai";
import React from 'react';
import { createPostList } from "./index";
import { stub } from 'sinon';
import { shallow } from "../../../testUtils";
import moment from 'moment';

describe('PostList', () => {
  const PostListItem = stub(),
    PostList = createPostList(React, PostListItem);

  it('must be a function', () => {
    assert.isFunction(PostList, 'createPostList must return a function');
  })

  it('rendering of a ListWithVoteScore with correct props', () => {
    const list = ['array', 'of', 'objects'],
      type = 'post',
      props = {
        postList: list,
      },
      wrapper = shallow(PostList).withProps(props),
      voteScoreFunction = wrapper.instance().voteScoreFunction,
      actual = wrapper.find('ListWithVoteScore').props(),
      expected = {
        Component: PostListItem,
        list: list,
        voteScoreHandler: voteScoreFunction,
        type
      }
    assert.deepEqual(actual, expected, "render() must render a ListWithVoteScore with correct props")
  })

})