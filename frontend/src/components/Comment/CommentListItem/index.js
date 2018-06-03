import React from 'react'
import { object } from "prop-types";
import UserInfo from "../UserInfo";
import './index.css'

export const createComment = React => {

  const Comment = ({ comment: { body, author, timestamp, voteScore } }) => (
    <div className="border-wrapper shadow-wrapper-weak comment__container">
      <UserInfo
        author={author}
        timestamp={timestamp}
        voteScore={voteScore} />
      <div className={"comment__container_body"}>{body}</div>
    </div>
  )

  Comment.propTypes = {
    comment: object.isRequired,
  }

  return Comment

}


export default createComment(React)