import React from 'react'
import { object } from "prop-types";
import withVoteScore from "../../../VoteScoreComposer";
import PostInfo from '../../PostInfo'
import './index.css'

export const createPostDetailsHeader = React => {

  class PostDetailsHeader extends React.Component {

    render() {
      const { post: { title, author, timestamp, voteScore, commentCount, category, id } } = this.props;
      return (
        <div className="border-wrapper shadow-wrapper-weak post-details">
          <div className="post-details__title">
            {title}
          </div>
          <div className="post-details__body">
            <PostInfo
              voteScore={voteScore}
              author={author}
              timestamp={timestamp}
              commentCount={commentCount}
              category={category}
            />
          </div>
        </div>
      )
    }
  }

  PostDetailsHeader.propTypes = {
    post: object.isRequired,
  }

  return PostDetailsHeader

}


export default createPostDetailsHeader(React)