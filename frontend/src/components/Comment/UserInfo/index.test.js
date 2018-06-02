import { assert } from "chai";
import React from 'react';
import { createUserInfo } from "./index";
import { shallow } from "../../../testUtils";
import moment from 'moment';

describe('UserInfo', () => {
  const UserInfo = createUserInfo(React);

  it('must render', () => {
    assert.isFunction(UserInfo)
  })

  it('render the username', () => {
    const author = 'John Doe',
      wrapper = shallow(UserInfo).withProps({ author }),
      actual = wrapper.text()

    assert.include(actual, author, 'render() should display a username')
  })

  it('renders formatted date', () => {
    const timestamp = 1525202495860,
      expected = moment(timestamp).fromNow(),
      wrapper = shallow(UserInfo).withProps({ timestamp }),
      actual = wrapper.text()
    assert.include(actual, expected, 'render() must render the timestamp as fromNow date')
  })

  it('render the voteScore', () => {
    const voteScore = 10,
      wrapper = shallow(UserInfo).withProps({ voteScore }),
      actual = wrapper.text()
    assert.include(actual, voteScore, 'render() must render the votescore when passed')
  })
})