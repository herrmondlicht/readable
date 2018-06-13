import { createCommentFormBody } from ".";
import React from 'react';
import { assert } from 'chai'
import { shallow } from "../../../../testUtils";
import { stub, assert as sinonAssert } from "sinon";

describe('CommentFormBody', () => {
  const CommentFormBody = createCommentFormBody(React),
    renderWithDefault = (props) => shallow(CommentFormBody).withProps({
      updateFormData: stub(),
      formData: {},
      ...props
    })

  it('type fo CommentFormBody', () => {
    assert.isFunction(CommentFormBody, 'CommentFormBody must be a function')
  });


  it('rendering of a author input with correct props', () => {
    const author = 'Mr test',
      wrapper = renderWithDefault({
        formData: { author }
      }),
      handleInputChange = wrapper.instance().handleInputChange,
      actual = wrapper.find('input[name="author"]').props(),
      expected = {
        type: "text",
        name: "author",
        onChange: handleInputChange,
        value: author
      }
    assert.deepEqual(actual, expected)
  })

  it('rendering of a body input with correct props', () => {
    const body = 'Loona loora',
      wrapper = renderWithDefault({
        formData: { body }
      }),
      handleInputChange = wrapper.instance().handleInputChange,
      actual = wrapper.find('input[name="body"]').props(),
      expected = {
        type: "text",
        name: "body",
        onChange: handleInputChange,
        value: body
      }
    assert.deepEqual(actual, expected)
  })

  it('call of updateFormData by handleInputChange', () => {
    const updateFormData = stub(),
      wrapper = renderWithDefault({
        updateFormData
      }),
      name = 'attrName',
      value = '12319494',
      params = {
        target: {
          name, value
        }
      },
      expectedCallParams = {
        [name]: value,
      },
      handleInputChange = wrapper.instance().handleInputChange,
      actual = handleInputChange(params)

    sinonAssert.calledWithExactly(updateFormData, expectedCallParams)
  })
})