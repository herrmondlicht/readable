import { assert } from "chai";
import React from 'react';
import { createCommentList } from "./index";
import { stub } from 'sinon';
import { shallow } from "../../../testUtils";
import moment from 'moment';

describe('CommentList', () => {
  const CommentListItem = stub(),
    CommentList = createCommentList(React, CommentListItem);

  it('must be a function', () => {
    assert.isFunction(CommentList, 'createCommentList must return a function');
  })

  it('rendering of a ListWithVoteScore with correct props', () => {
    const list = ['array', 'of', 'objects'],
      type = 'comment',
      props = {
        commentList: list,
      },
      wrapper = shallow(CommentList).withProps(props),
      voteScoreFunction = wrapper.instance().voteScoreFunction,
      actual = wrapper.find('ListWithVoteScore').props(),
      expected = {
        Component: CommentListItem,
        list: list,
        voteScoreHandler: voteScoreFunction,
        type
      }
    assert.deepEqual(actual, expected, "render() must render a ListWithVoteScore with correct props")
  })

})