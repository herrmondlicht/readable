import React from 'react';
import { func, object } from 'prop-types';
export const createPostFormBody = React => {


  class PostFormBody extends React.PureComponent {

    handleInputChange = ({ target }) => {
      const { name: attribute, value } = target;
      this.props.updateFormData({
        [attribute]: value
      })
    }


    render() {
      const { author = '', body = '' } = this.props.formData;
      return (
        <div>
          <input
            name="author"
            type="text"
            onChange={this.handleInputChange}
            value={author}
          />
          <input
            name="body"
            type="text"
            onChange={this.handleInputChange}
            value={body}
          />
        </div>
      )
    }
  }

  PostFormBody.propTypes = {
    updateFormData: func.isRequired,
    formData: object.isRequired
  }

  return PostFormBody
}

export default createPostFormBody(React)