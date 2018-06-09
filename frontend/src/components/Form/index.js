import React from 'react';
import { object, func } from "prop-types";

export const createForm = React => {
  class Form extends React.Component {

    state = {
      formData: {}
    }


    updateFormData = formData => {
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          ...formData,
        }
      }))
    }

    clearForm = () => this.setState({
      formData: {}
    })

    render() {
      const { Component, componentProps, actionCancel, actionSend } = this.props,
      {formData} = this.state
      return (
        <div className="form-container">
          <div className="form-container__content">
            <Component {...componentProps} formData={formData} updateFormData={this.updateFormData} clearForm={this.clearForm} />
          </div>
          <div className="form-container__bottom">
            <button name="sendButton" onClick={actionSend} />
            {
              actionCancel &&
              <button name="cancelButton" onClick={actionCancel} />
            }
          </div>
        </div>
      )
    }
  }

  Form.propTypes = {
    componentProps: object,
    Component: func.isRequired,
    actionSend: func.isRequired,
    actionCancel: func,
  }


  return Form;
}


export default createForm(React)