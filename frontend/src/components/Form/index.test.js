import { assert } from "chai";
import React from 'react';
import { createForm } from "./index";
import { shallow } from "../../testUtils";
import { stub, assert as sinonAssert } from 'sinon'
describe('Form', () => {

  const Form = createForm(React),
    renderWithDefault = (props) => shallow(Form).withProps({
      Component: () => <div></div>,
      actionSend: stub(),
      ...props
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
      clearForm = wrapper.instance().clearForm,
      formData = wrapper.state().formData
    const actual = wrapper.find('Component').props(),
      expected = {
        ...componentProps,
        updateFormData,
        clearForm,
        formData
      }

    assert.deepEqual(actual, expected, 'render() must render the passed Component with the correct props')

  })

  it("rendering of a sendButton with correct params", () => {
    const wrapper = renderWithDefault(),
      handleActionSend = wrapper.instance().handleActionSend,
      actual = wrapper.find('button[name="sendButton"]').prop('onClick')

    assert.equal(actual, handleActionSend, "render() must render a sendButton with correct onClick prop")
  })

  it('absence of a cancelButton if actionCancel is not passed', () => {
    const actionCancel = stub(),
      wrapper = renderWithDefault();

    const actual = wrapper.find('button[name="cancelButton"]').length
    const expected = 0

    assert.equal(actual, expected, "render() must not have a cancel button if cancel action is passed")

  })

  it("rendering of a cancelButton with correct params", () => {
    const actionCancel = stub(),
      wrapper = renderWithDefault({
        actionCancel
      }),
      actual = wrapper.find('button[name="cancelButton"]').prop('onClick')

    assert.equal(actual, actionCancel, "render() must render a cancelButton with correct onClick prop")
  })

  it('calling of actionSend with correct params by handleActionSend', async () => {
    const actionSend = stub(),
      wrapper = renderWithDefault({
        actionSend
      }),
      handleActionSend = wrapper.instance().handleActionSend,
      formData = {
        foo: 'bar',
        baz: 'zoo'
      }

    await wrapper.setState({ formData })

    handleActionSend();

    sinonAssert.calledWith(actionSend, formData)

  })

})