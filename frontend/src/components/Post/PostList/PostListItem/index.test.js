import { assert } from "chai";
import React from 'react';
import { createPostListItem } from "./index";
import { shallow } from "../../../../testUtils";
describe('PostListItem', () => {
  const PostListItem = createPostListItem(React)

  const renderWithRequired = (props) => shallow(PostListItem).withProps({
    post: {
      id: 123, ...props,
    }
  })
  it('rendering of title text', () => {
    const title = 'test PostListItem',
      wrapper = renderWithRequired({
        title,
      }),
      actual = wrapper.text()
    assert.include(actual, title, 'must render the passed title text')
  })

  it('rendering of body text', () => {
    const body = 'test PostListItem',
      wrapper = renderWithRequired({
        body,
      }),
      actual = wrapper.text()
    assert.include(actual, body, 'must render the passed body text')
  })

  it('must render a PostInfo component', () => {
    const post = {
      body: 'test PostListItem',
      author: 'Joshua Down',
      voteScore: -10,
      timestamp: 1525205449912,
      category: 'category1',
      commentCount: 25,
      id: 123,
    },
      wrapper = shallow(PostListItem).withProps({ post }),
      actual = wrapper.find('PostInfo').props(),
      expected = {
        ...post,
        postId: post.id,
      }

    assert.deepInclude(expected, actual, 'Could not render a PostInfo')
  })

})