import React from 'react';
import VoteScore from "../VoteScore";
import "./index.css";
export default ({ scoreUp, scoreDown }, Component) =>
  (
    <div className='with-votescore'>
      <div className='with-votescore__votescore--hidden'>
        <VoteScore
          scoreUp={scoreUp}
          scoreDown={scoreDown}
        />
      </div>
      <div className='with-votescore__component'>
        {Component}
      </div>
    </div>
  )