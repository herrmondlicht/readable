import React from 'react'
import { func, array } from "prop-types";
import _CommentListItem from "../CommentListItem";
import './index.css'
import ListWithVoteScore, {TYPE_OPTIONS} from '../../ListWithVoteScore'
export const createCommentList = (React, CommentListItem) => {

  class CommentList extends React.PureComponent {

    voteScoreFunction = (commentId, option) =>
      this.props.voteScoreHandler && this.props.voteScoreHandler(commentId, option)

    render() {
      const { commentList = [] } = this.props;
      return (
        <div>
          <ListWithVoteScore
            Component={CommentListItem}
            list={commentList}
            voteScoreHandler={this.voteScoreFunction}
            type={TYPE_OPTIONS.comment}
          />
        </div>
      )
    }
  }

  CommentList.propTypes = {
    voteScoreHandler: func,
    commentList: array,
  }

  return CommentList

}


export default createCommentList(React, _CommentListItem)