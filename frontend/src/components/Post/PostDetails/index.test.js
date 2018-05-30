import { assert } from "chai";
import React from 'react';
import { createPostDetails } from "./index";
import { shallow } from "../../../testUtils";

describe('PostListItem', () => {
  const PostDetails = createPostDetails(React)

  const renderWithRequired = (props) => shallow(PostDetails).withProps({
    match: {
      params: 'post1'
    }
  })

  it('typeof PostDetails' , () => {
    assert.isFunction(PostDetails, 'PostDetails must be a function')
  })

  

})