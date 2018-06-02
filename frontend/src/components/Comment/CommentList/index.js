import React from 'react'
import { string, number } from "prop-types";
import CommentListItem from "../CommentListItem";
import './index.css'
import withVoteScore from "../../VoteScoreComposer";

export const createCommentList = React => {

  class CommentList extends React.PureComponent {

    getVoteScoreFunction = (commentId, option) =>
      () =>
        this.props.voteScoreHandler && this.props.voteScoreHandler(commentId, option)

    render() {
      const { commentList = [] } = this.props;
      return (
        <div>
          {commentList.map(comment => (
            <div key={comment.id} className="Comment-list__item">
              {
                withVoteScore(
                  {
                    scoreUp: this.getVoteScoreFunction(comment.id, 'upVote'),
                    scoreDown: this.getVoteScoreFunction(comment.id, 'downVote')
                  },
                  <CommentListItem
                    body={comment.body}
                    author={comment.author}
                    timestamp={comment.timestamp}
                    voteScore={comment.voteScore} />)
              }
            </div>
          ))}
        </div>
      )
    }
  }

  return CommentList

}


export default createCommentList(React)