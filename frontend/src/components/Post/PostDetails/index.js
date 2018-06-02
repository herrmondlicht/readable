import React from 'react'
import { object } from "prop-types";
import './index.css'
import withVoteScore from '../../VoteScoreComposer'
import PostDetailsHeader from "./PostDetailsHeader";

export const createPostDetails = React => {

  class PostDetails extends React.Component {
    render() {
      const { post } = this.props;
      return (
        <div className="border-wrapper shadow-wrapper-weak post-details">
          <div className="post-details__title">
            {
              withVoteScore({
                scoreUp: () => { },
                scoreDown: () => { },
              },
                <PostDetailsHeader post={post} />
              )
            }
          </div>
          <div className="post-details__body">
            {post.body}
          </div>
          <div className="post-details__comments">
          </div>
        </div>
      )
    }
  }

  PostDetails.propTypes = {
    match: object.isRequired,
    post: object.isRequired,
  }

  return PostDetails

}


export default createPostDetails(React)