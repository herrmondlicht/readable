import React from 'react';
import VoteScore from "../VoteScore";
import "./index.css";
export default ({ id, scoreHandlerFunction }, Component) =>
  (
    <div className='with-votescore'>
      <div className='with-votescore__votescore--hidden'>
        <VoteScore
          id={id}
          voteScoreHandler={scoreHandlerFunction}
        />
      </div>
      <div className='with-votescore__component'>
        {Component}
      </div>
    </div>
  )