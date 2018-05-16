import { assert } from "chai";
import React from 'react';
import { createPostInfo } from "./index";
import { shallow } from "../../../testUtils";
import moment from 'moment';

describe('PostInfo', () => {
  const PostInfo = createPostInfo(React)

  it('must render', () => {
    assert.isFunction(PostInfo)
  })

  it('rendering of comments quantity', () => {
    const commentCount = 35,
      wrapper = shallow(PostInfo).withProps({ commentCount }),
      actual = wrapper.text()

    assert.include(actual, commentCount, 'render() should display the comments quantity')
  })

  it('rendering of formatted date', () => {
    const timestamp = 1525202495860,
      expected = moment(timestamp).fromNow(),
      wrapper = shallow(PostInfo).withProps({ timestamp }),
      actual = wrapper.text()
    assert.include(actual, expected, 'render() must render the timestamp as fromNow date')
  })

  it('rendering of authors name', () => {
    const author = 'John Doe',
      wrapper = shallow(PostInfo).withProps({ author }),
      actual = wrapper.text()
    assert.include(actual, author, 'render() must render the timestamp as fromNow date')
  })

  it('rendering of voteScore', () => {
    const voteScore = 10,
      wrapper = shallow(PostInfo).withProps({ voteScore }),
      actual = wrapper.text()
    assert.include(actual, voteScore, 'render() must render the votescore when passed')
  })
})