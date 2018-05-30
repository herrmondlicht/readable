import React from 'react'
import { object } from "prop-types";
import './index.css'

export const createPostDetails = React => {

  const PostDetails = ({ post: { title, body, author, timestamp, voteScore, commentCount, category, id } }) => (
    <div className="border-wrapper shadow-wrapper-weak post-details">
      <div className="post-details__title">
      </div>
      <div className="post-details__body">
      </div>
      <div className="post-details__comments">
      </div>
    </div>
  )

  PostDetails.propTypes = {
    match: object.isRequired
  }

  return PostDetails

}


export default createPostDetails(React)