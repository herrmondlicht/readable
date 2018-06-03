import React from 'react'
import { func, array } from "prop-types";
import _PostListItem from "../PostListItem";
import './index.css'
import ListWithVoteScore from '../../ListWithVoteScore'
export const createPostList = (React, PostListItem) => {

  class PostList extends React.PureComponent {

    voteScoreFunction = (postId, option) =>
      this.props.voteScoreHandler && this.props.voteScoreHandler(postId, option)

    render() {
      const { postList = [] } = this.props;
      return (
        <div>
          <ListWithVoteScore
            Component={PostListItem}
            list={postList}
            voteScoreHandler={this.voteScoreFunction}
            type="post"
          />
        </div>
      )
    }
  }

  PostList.propTypes = {
    voteScoreHandler: func,
    postList: array,
  }

  return PostList

}


export default createPostList(React, _PostListItem)