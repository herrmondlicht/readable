import React from 'react';
import { string, number } from 'prop-types';
import './index.css'
import moment from "moment";

export const createPostInfo = (React) => {

  const PostInfo = ({
    timestamp = new Date().valueOf(),
    author,
    category,
    voteScore,
    commentCount,
  }) => (
      <div className='post-info'>
        <div className='post-info__container'>
          <span className='post-info__container_data__vote_score'>{voteScore} pts</span>
          <div className='post-info__container_data'>
            <span className='post-info__container_data__label post-info__container_data__label--bold'>by {author}</span>
            <span className='post-info__container_data__label'>{moment(timestamp).fromNow()}</span>
            <span className='post-info__container_data__label'>{commentCount} comments</span>
          </div>
        </div>
      </div>
    )

  PostInfo.propTypes = {
    timestamp: number,
    author: string,
    category: string,
    voteScore: number,
    commentCount: number,
  }

  return PostInfo

}


export default createPostInfo(React)