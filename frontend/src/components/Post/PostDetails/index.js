import React from 'react'
import { object, array, func } from "prop-types";
import './index.css'
import withVoteScore from '../../VoteScoreComposer'
import PostDetailsHeader from "./PostDetailsHeader";
import CommentList from '../../Comment/CommentList'

export const createPostDetails = React => {

  class PostDetails extends React.Component {

    voteScoreFunction = (postId, option) =>
      this.props.voteScoreHandler && this.props.voteScoreHandler(postId, option)

    getPostComments = (id) =>
      this.props.commentsFromPost && this.props.commentsFromPost(id)

    componentDidMount = () => this.getPostComments(this.props.post.id)

    render() {
      const { post, commentList = [] } = this.props;
      return (
        <div className="border-wrapper shadow-wrapper-weak post-details">
          <div className="post-details__title">
            {
              withVoteScore({
                id: post.id,
                scoreHandlerFunction: this.voteScoreFunction
              },
                <PostDetailsHeader post={post} />
              )
            }
          </div>
          <div className="post-details__body">
            {post.body}
          </div>
          <div className="post-details__comments">
            <CommentList commentList={commentList} />
          </div>
        </div>
      )
    }
  }

  PostDetails.propTypes = {
    match: object.isRequired,
    post: object.isRequired,
    postComments: array,
    commentList: array,
    commentsFromPost: func,
  }

  return PostDetails

}


export default createPostDetails(React)