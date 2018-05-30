import React from 'react'
import { string, number } from "prop-types";
import PostListItem from "./PostListItem";
import './index.css'

export const createPostList = React => {

  class PostList extends React.PureComponent {

    render() {
      const { postList = [] } = this.props;
      return (
        <div>
          {postList.map(post => (
            <div key={post.id} className="post-list__item">
              <PostListItem post={post} />
            </div>
          ))}
        </div>
      )
    }
  }

  return PostList

}


export default createPostList(React)