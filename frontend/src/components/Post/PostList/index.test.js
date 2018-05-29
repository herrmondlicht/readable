import { assert } from "chai";
import React from 'react';
import { createPostList } from "./index";
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
  })

})