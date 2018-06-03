import { assert } from "chai";
import React from 'react';
import { createListWithVoteScore } from "./index";
import { stub } from 'sinon';
import { shallow } from "../../testUtils";
import moment from 'moment';

describe('ListWithVoteScore', () => {
  const ListWithVoteScore = createListWithVoteScore(React);

  it('must be a function', () => {
    assert.isFunction(ListWithVoteScore, 'createListWithVoteScore must return a function');
  })

  it('rendering of VoteScores with correct params', () => {
    const Component = () => <div>Testing</div>,
      voteScoreHandler = stub(),
      type = 'typeOfList',
      props = {
        Component,
        voteScoreHandler,
        type,
        list: [
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
      wrapper = shallow(ListWithVoteScore).withProps(props);
    props.list.map((item, index) => {
      const actual = wrapper.find('VoteScore').at(index).props(),
        expected = {
          id: item.id,
          voteScoreHandler,
        }

      assert.deepEqual(actual, expected, 'render() must render the correct number of VoteScore with correct props');
    });
  });

  it('rendering of the passed Component with correct params', () => {
    const Component = () => <div>Testing</div>,
      voteScoreHandler = stub(),
      type = 'typeOfList',
      props = {
        Component,
        voteScoreHandler,
        type,
        list: [
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
      wrapper = shallow(ListWithVoteScore).withProps(props);
    props.list.map((item, index) => {
      const actual = wrapper.find('Component').at(index).props(),
        expected = {
          [type]: item
        }
      assert.deepEqual(actual, expected, 'render() must render the correct number of VoteScore with correct props');
    });
  });

})