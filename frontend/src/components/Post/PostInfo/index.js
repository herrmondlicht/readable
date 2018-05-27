import React from 'react';
import { string, number } from 'prop-types';
import './index.css'
import moment from "moment";
import VoteScore from '../../VoteScore'
export const createPostInfo = (React) => {

  class PostInfo extends React.PureComponent {

    postScoreHandler = (option) => {
      const { postId } = this.props;
      //ToDo: Score Method
    }

    render() {

      const {
        timestamp = new Date().valueOf(),
        author,
        category,
        voteScore,
        commentCount,
        postId } = this.props;
      return (
        <div className='post-info'>
          <div className='post-info__container'>
            <span className='post-info__container_data__vote_score'>{voteScore} pts</span>
            <div className='post-info__container_data'>
              <span className='post-info__container_data__label post-info__container_data__label--bold'>by {author}</span>
              <span className='post-info__container_data__label'>{moment(timestamp).fromNow()}</span>
              <span className='post-info__container_data__label'>{commentCount} comments</span>
            </div>
            <div className='post-info__container_vote-score__elem--hidden'>
              <VoteScore
                scoreUp={this.postScoreHandler}
                scoreDown={this.postScoreHandler}
                arrowColor='#FFF'
              />
            </div>
          </div>
        </div>
      )
    }

  }

  PostInfo.propTypes = {
    timestamp: number,
    author: string,
    category: string,
    voteScore: number,
    commentCount: number,
    postId: number.isRequired,
  }

  return PostInfo

}


export default createPostInfo(React)