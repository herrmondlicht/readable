import { assert } from "chai";
import React from 'react';
import { createComment } from "./index";
import { shallow } from "../../../testUtils";
describe('Comment', () => {
  const Comment = createComment(React)

  it('must render', () => {
    assert.isFunction(Comment)
  })

  it('must render the comment in its text', () => {
    const body = 'test comment',
      wrapper = shallow(Comment).withProps({
        comment: { body },
      }),
      actual = wrapper.text()
    assert.include(actual, body, 'Could not render the comment')
  })

  it('must render a UserInfo component', () => {
    const comment = {
      body: 'test comment',
      author: 'Joshua Down',
      voteScore: -10,
      timestamp: 1525205449912,
    },
      props = {
        comment
      },
      wrapper = shallow(Comment).withProps(props),
      actual = wrapper.find('UserInfo').props()

    assert.deepInclude(comment, actual, 'Could not render a UserInfo')
  })

})