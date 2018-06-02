import { assert } from "chai";
import React from 'react';
import { createPostDetailsHeader } from "./index";
import { shallow } from "../../../../testUtils";

describe('PostListItem', () => {
  const PostDetailsHeader = createPostDetailsHeader(React)

  const renderWithRequired = (props) => shallow(PostDetailsHeader).withProps({
    post: {},
    ...props,
  })

  it('typeof PostDetailsHeader', () => {
    assert.isFunction(PostDetailsHeader, 'PostDetailsHeader must be a function')
  })

  it('rendering of a title', () => {
    const post = {
      title: 'Testing the Title'
    },
      wrapper = renderWithRequired({ post }),
      actual = wrapper.text()

    assert.include(actual, post.title, 'render() must render a title')
  })

  it('rendering of a PostInfo w/ correct props', () => {
    const post = {
      voteScore: 12,
      author: 'Mr Test',
      timestamp: 1527962013124,
      commentCount: 8,
      category: 'categoryOne'
    },
      wrapper = renderWithRequired({ post }),
      actualProps = wrapper.find('PostInfo').props();

    assert.include(actualProps, post, 'render() must render a PostInfo with correct props')
  })



})