import React from 'react';
import { func, object } from "prop-types";
import PostFormBody from './PostFormBody';
import Form from '../../Form';
import { connect } from "react-redux";
import postActions from "../../../actions/post";
import { createPost } from "../../../config/api";

export const createPostForm = (React, { PostFormBody, createPost } = {}) => {
  class PostForm extends React.PureComponent {

    render() {
      const { addPost } = this.props;
      return (
        <div>
          <Form Component={PostFormBody} actionSend={addPost} />
        </div>
      )
    }
  }

  PostForm.propTypes = {
    addPost: func.isRequired,
    post: object.isRequired
  }

  return PostForm
}

const createdPostForm = () => createPostForm(React, { PostFormBody, createPost })


export const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(postActions.createPost(post))
})

export default connect(mapDispatchToProps)(createdPostForm())

