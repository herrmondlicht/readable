import React from 'react';
import { string, number } from 'prop-types';
import './index.css'
import moment from "moment";

export const createUserInfo = (React) => {

  const UserInfo = ({ author, timestamp= new Date(), voteScore}) => (
    <div className={"user-info"}>
      <span className='user-info__author'>{author} • </span>
      <span className='user-info__timespan'>{moment(timestamp).fromNow()} • </span>
      <span className='user-info__votescore'>{voteScore} pts</span>
    </div>
  )

  UserInfo.propTypes = {
    voteScore: string,
    author: string,
    timestamp: number
  }

  return UserInfo

}


export default createUserInfo(React)