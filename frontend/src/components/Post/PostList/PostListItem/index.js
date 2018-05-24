import React from 'react'
import { string, number } from "prop-types";
import PostInfo from "../../PostInfo";
import './index.css'

export const createPostListItem = React => {

  const PostListItem = ({ title, body, author, timestamp, voteScore, commentCount, category }) => (
    <div className="border-wrapper shadow-wrapper-weak post-list-item">
      <div className="post-list-item__content">
        <div className="post-list-item__content_title">
          {title}
        </div>
        <div className="post-list-item__content_body">
          {body}
        </div>
      </div>
      <div className="post-list-item__info">
        <PostInfo
          category={category}
          commentCount={commentCount}
          author={author}
          timestamp={timestamp}
          voteScore={voteScore} />
      </div>
    </div>
  )

  PostListItem.propTypes = {
    body: string,
    author: string,
    timestamp: number,
    voteScore: number,
    commentCount: number,
    category: string,
    title: string,
  }

  return PostListItem

}


export default createPostListItem(React)