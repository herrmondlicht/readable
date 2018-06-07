import { assert } from "chai";
import React from 'react';
import { createForm } from "./index";
import { shallow } from "../../testUtils";
import { stub, assert as sinonAssert } from 'sinon'
describe('Form', () => {

  const Form = createForm(React),
    renderWithDefault = (props) => shallow(Form).withProps({
      ...props,
      Component: () => <div></div>,
      actionSend: stub(),
    })

  it('type of Form', () => {
    assert.isFunction(Form, 'Form must be a function')
  })

  it('owning of a default state', () => {
    const wrapper = renderWithDefault(),
      actual = wrapper.state(),
      expected = {
        formData: {}
      }

    assert.deepEqual(actual, expected, 'Form must own a default state')
  })

  it('state changing correctly when updateFormData called', () => {
    const wrapper = renderWithDefault(),
      instance = wrapper.instance(),
      text = 'testing text',
      paramData = {
        text
      },
      updateFormData = instance.updateFormData

    updateFormData(paramData);

    const actual = wrapper.state(),
      expected = {
        formData: paramData
      }

    assert.deepEqual(actual, expected, 'updateFormData(data) must update the state correctly')
  })

  it('state keeping previous data not updated when updateFormData called', () => {
    const wrapper = renderWithDefault(),
      instance = wrapper.instance(),
      text = 'testing text',
      paramData = {
        text
      },
      oldData = {
        old: true,
        anotherParam: 'this is another param',
        text: 'oldText',
      },
      updateFormData = instance.updateFormData

    wrapper.setState({
      formData: oldData,
    })

    updateFormData(paramData);

    const actual = wrapper.state(),
      expected = {
        formData: {
          ...oldData,
          ...paramData
        }
      }

    assert.deepEqual(actual, expected, 'updateFormData(data) must keep values that werent ment to be updated')
  })


  it('clearing of state when clearForm called', () => {
    const wrapper = renderWithDefault(),
      instance = wrapper.instance(),
      clearForm = instance.clearForm

    wrapper.setState({
      formData: {
        test: 'yep',
        focus: 'hocus',
        pocus: true,
      }
    })

    clearForm()

    const actual = wrapper.state(),
      expected = {
        formData: {}
      }

    assert.deepEqual(actual, expected, 'clearForm() must clear the state formData')
  })

  it('rendering of a Component with correct props', () => {
    const Component = (props) => <div>{props}</div>,
      test = 'string test',
      componentProps = { test },
      wrapper = renderWithDefault({
        Component,
        componentProps
      }),
      updateFormData = wrapper.instance().updateFormData,
      clearForm = wrapper.instance().clearForm

    const actual = wrapper.find('Component').props(),
      expected = {
        ...componentProps,
        updateFormData,
        clearForm,
      }

    assert.deepEqual(actual, expected, 'render() must render the passed Component with the correct props')

  })

  it('rendering of a actionSend button with correct props', () => {
    
  })

})