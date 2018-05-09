import React from 'react';
import VoteScore from "../VoteScore";

export default ({scoreUp, scoreDown}, Component) => {
  return () => (
    <div className='with-votescore'>
      <div className='with-votescore__vote-score--hidden'>
        <VoteScore
          scoreUp={scoreUp}
          scoreDown={scoreDown}
        />
      </div>
      <div className='with-votescore__component'>
        <Component/>
      </div>
    </div>
  )
}