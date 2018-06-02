import React from 'react'
import { string, number } from "prop-types";
import PostListItem from "./PostListItem";
import './index.css'
import withVoteScore from "../../VoteScoreComposer";

export const createPostList = React => {

  class PostList extends React.PureComponent {

    getVoteScoreFunction = (postId, option) =>
      () =>
        this.props.voteScoreHandler && this.props.voteScoreHandler(postId, option)

    render() {
      const { postList = [] } = this.props;
      return (
        <div>
          {postList.map(post => (
            <div key={post.id} className="post-list__item">
              {
                withVoteScore(
                  {
                    scoreUp: this.getVoteScoreFunction(post.id, 'upVote'),
                    scoreDown: this.getVoteScoreFunction(post.id, 'downVote')
                  },
                  <PostListItem post={post} />)
              }
            </div>
          ))}
        </div>
      )
    }
  }

  return PostList

}


export default createPostList(React)