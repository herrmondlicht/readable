import { stub } from 'sinon';
import React from 'react';
import { shallow } from '../../../testUtils';
import { createCommentForm } from '.';
import { assert } from 'chai';

describe('CommentForm', () => {
  const CommentFormBody = stub(),
    dependencies = {
      CommentFormBody
    },
    CommentForm = createCommentForm(React, { CommentFormBody }),
    defaultProps = {
      postComment: stub(),
      post: {}
    }

  it('rendering of a Form with correct params', () => {
    const postComment = stub(),
      wrapper = shallow(CommentForm).withProps({
        ...defaultProps,
        postComment,
      }),
      actualProps = wrapper.find('Form').props(),
      expected = {
        Component: CommentFormBody,
        actionSend: postComment,
      }
    assert.deepEqual(actualProps, expected, 'render() must render a Form with correct params')
  })
})