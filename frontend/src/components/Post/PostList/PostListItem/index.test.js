import { assert } from "chai";
import React from 'react';
import { createPostListItem } from "./index";
import { shallow } from "../../../../testUtils";
describe('PostListItem', () => {
  const PostListItem = createPostListItem(React)

  it('must render', () => {
    assert.isFunction(PostListItem)
  })

  it('rendering of title text', () => {
    const title = 'test PostListItem',
      wrapper = shallow(PostListItem).withProps({
        title,
      }),
      actual = wrapper.text()
    assert.include(actual, title, 'must render the passed title text')
  })

  it('rendering of body text', () => {
    const body = 'test PostListItem',
      wrapper = shallow(PostListItem).withProps({
        body,
      }),
      actual = wrapper.text()
    assert.include(actual, body, 'must render the passed body text')
  })

  it('must render a PostInfo component', () => {
    const props = {
      body: 'test PostListItem',
      author: 'Joshua Down',
      voteScore: -10,
      timestamp: 1525205449912,
      category: 'category1',
      commentCount: 25,
    },
      wrapper = shallow(PostListItem).withProps(props),
      actual = wrapper.find('PostInfo').props()

    assert.deepInclude(props, actual, 'Could not render a PostInfo')
  })

})