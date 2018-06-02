import { assert } from "chai";
import React from 'react';
import { createCommentList } from "./index";
import { stub } from 'sinon';
import { shallow } from "../../../testUtils";
import moment from 'moment';

describe('CommentList', () => {
  const CommentList = createCommentList(React);

  it('must be a function', () => {
    assert.isFunction(CommentList, 'createCommentList must return a function');
  })

  it('rendering of CommentListItem with correct props when prop commentList passed', () => {
    const props = {
      commentList: [{
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: '8tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      }
      ]
    },
      wrapper = shallow(CommentList).withProps(props);
    props.commentList.map((comment, index) => {
      const actual = wrapper.find('CommentListItem').at(index).props();
      assert.include(comment, actual, 'CommentList must have CommentListItems with correct props');
    });
  });

  it('rendering of VoteScore with correct props for each CommentListItem', () => {
    const props = {
      commentList: [{
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: '8tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      }]
    },
      wrapper = shallow(CommentList).withProps(props);
    props.commentList.map((post, index) => {
      const actual = wrapper.find('VoteScore').at(index).props();
      assert.isFunction(actual.scoreUp, "VoteScore's scoreUp must be a function")
      assert.isFunction(actual.scoreDown, "VoteScore's scoreDown must be a function");
    });
  });

  it('return of getVoteScoreFunction function', () => {
    const voteScoreHandler = stub(),
      wrapper = shallow(CommentList).withProps({ voteScoreHandler }),
      getVoteScoreFunction = wrapper.instance().getVoteScoreFunction,
      actual = getVoteScoreFunction()
    assert.isFunction(actual, 'getVoteScoreFunction() must return a function')
  })

  it('call of the returned function from getVoteScoreFunction', () => {
    const voteScoreHandler = stub(),
      optionParam = 'upVote',
      commentId = '8xf0y6ziyjabvozdd253nd',
      wrapper = shallow(CommentList).withProps({ voteScoreHandler }),
      getVoteScoreFunction = wrapper.instance().getVoteScoreFunction,
      expected = 'correct return';
    voteScoreHandler.withArgs(commentId, optionParam).returns(expected);
    const actual = getVoteScoreFunction(commentId, optionParam)();

    assert.equal(actual, expected)

  })

})