import React from 'react'
import { object } from "prop-types";
import PostInfo from "../../PostInfo";
import './index.css'
import { Redirect } from 'react-router-dom'

export const createPostListItem = React => {

  const PostListItem = ({ post: { title, body, author, timestamp, voteScore, commentCount, category, id } }) => (
    <div className="shadow-wrapper-weak post-list-item">
      <div
        onClick={() => <Redirect to={`/details/${id}`} />}
        className="border-wrapper post-list-item__content">
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
          voteScore={voteScore}
          postId={id} />
      </div>
    </div>
  )

  PostListItem.propTypes = {
    post: object.isRequired
  }

  return PostListItem

}


export default createPostListItem(React)