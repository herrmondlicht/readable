import React from 'react';
import { func, object } from "prop-types";
import CommentFormBody from './CommentFormBody';
import Form from '../../Form';

export const createCommentForm = (React, { CommentFormBody } = {}) => {
  class CommentForm extends React.PureComponent {

    render() {
      const { postComment } = this.props;
      return (
        <div>
          <Form Component={CommentFormBody} actionSend={postComment} />
        </div>
      )
    }
  }

  CommentForm.propTypes = {
    postComment: func.isRequired,
    post: object.isRequired
  }

  return CommentForm
}

export default createCommentForm(React, { CommentFormBody })

