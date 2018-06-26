import { stub, assert as sinonAssert } from 'sinon';
import React from 'react';
import { shallow } from '../../../testUtils';
import { createPostForm, mapDispatchToProps } from '.';
import { assert } from 'chai';

describe('PostForm', () => {
  const PostFormBody = stub(),
    dependencies = {
      PostFormBody
    },
    PostForm = createPostForm(React, { PostFormBody }),
    defaultProps = {
      addPost: stub(),
      post: {}
    }

  it('rendering of a Form with correct params', () => {
    const addPost = stub(),
      wrapper = shallow(PostForm).withProps({
        ...defaultProps,
        addPost,
      }),
      actualProps = wrapper.find('Form').props(),
      expected = {
        Component: PostFormBody,
        actionSend: addPost,
      }
    assert.deepEqual(actualProps, expected, 'render() must render a Form with correct params')
  })

  it('return of mapDispatchToProps', () => {
    const dispatch = stub(),
    actual = mapDispatchToProps(dispatch),
    availableFunctions = ['addPost']

    availableFunctions.forEach(availableFunction => {
      const callParam = {foo:'bar'}
      actual[availableFunction](callParam)
      sinonAssert.called(dispatch)
    })
  })
})