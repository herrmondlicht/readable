import React from 'react'
import { string, number } from "prop-types";
import UserInfo from "../UserInfo";
import './index.css'

export const createComment = React => {

  const Comment = ({ body, author, timestamp, voteScore }) => (
    <div className="border-wrapper shadow-wrapper-weak comment__container">
      <UserInfo
        author={author}
        timestamp={timestamp}
        voteScore={voteScore} />
      <div className={"comment__container_body"}>{body}</div>
    </div>
  )

  Comment.propTypes = {
    body: string,
    author: string,
    timestamp: number,
    voteScore: number,
  }

  return Comment

}


export default createComment(React)