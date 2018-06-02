import { assert } from "chai";
import React from 'react';
import { createPostList } from "./index";
import { stub } from 'sinon';
import { shallow } from "../../../testUtils";
import moment from 'moment';

describe('PostList', () => {
  const PostList = createPostList(React);

  it('must be a function', () => {
    assert.isFunction(PostList, 'createPostList must return a function');
  })

  it('rendering of PostListItem with correct props when prop PostList passed', () => {
    const props = {
      postList: [
        {
          id: '8xf0y6ziyjabvozdd253nd',
          timestamp: 1467166872634,
          title: 'Udacity is the best place to learn React',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 6,
          deleted: false,
          commentCount: 2
        },
        {
          id: '6ni6ok3ym7mf1p33lnez',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body: 'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'redux',
          voteScore: -5,
          deleted: false,
          commentCount: 0
        }
      ]
    },
      wrapper = shallow(PostList).withProps(props);
    props.postList.map((post, index) => {
      const actual = wrapper.find('PostListItem').at(index).props().post;
      assert.deepEqual(post, actual, 'PostList must have PostListItems with correct props');
    });
  });

  it('rendering of VoteScore with correct props for each PostListItem', () => {
    const props = {
      postList: [
        {
          id: '8xf0y6ziyjabvozdd253nd',
          timestamp: 1467166872634,
          title: 'Udacity is the best place to learn React',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 6,
          deleted: false,
          commentCount: 2
        },
        {
          id: '6ni6ok3ym7mf1p33lnez',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body: 'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'redux',
          voteScore: -5,
          deleted: false,
          commentCount: 0
        }
      ]
    },
      wrapper = shallow(PostList).withProps(props);
    props.postList.map((post, index) => {
      const actual = wrapper.find('VoteScore').at(index).props();
      assert.isFunction(actual.scoreUp, "VoteScore's scoreUp must be a function")
      assert.isFunction(actual.scoreDown, "VoteScore's scoreDown must be a function");
    });
  });

  it('return of getVoteScoreFunction function', () => {
    const voteScoreHandler = stub(),
      wrapper = shallow(PostList).withProps({ voteScoreHandler }),
      getVoteScoreFunction = wrapper.instance().getVoteScoreFunction,
      actual = getVoteScoreFunction()
    assert.isFunction(actual, 'getVoteScoreFunction() must return a function')
  })

  it('call of the returned function from getVoteScoreFunction', () => {
    const voteScoreHandler = stub(),
      optionParam = 'upVote',
      postId = '8xf0y6ziyjabvozdd253nd',
      wrapper = shallow(PostList).withProps({ voteScoreHandler }),
      getVoteScoreFunction = wrapper.instance().getVoteScoreFunction,
      expected = 'correct return';
    voteScoreHandler.withArgs(postId, optionParam).returns(expected);
    const actual = getVoteScoreFunction(postId, optionParam)();

    assert.equal(actual, expected)

  })

})