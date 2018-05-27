import React from 'react'
import {func, string} from "prop-types";
import FaArrowUp from "react-icons/lib/fa/arrow-up";
import FaArrowDown from "react-icons/lib/fa/arrow-down";
import './index.css'

export const createVoteScore = React => {
  
  const VoteScore = ({scoreUp, scoreDown, arrowColor}) => (
    <div className="vote-score-component" style={{color:arrowColor}}>
      <div className="vote-score-component__voter" onClick={scoreUp}>
        <FaArrowUp width={20} height={20}/>
      </div>
      <div className="vote-score-component__voter" onClick={scoreDown}>
        <FaArrowDown width={20} height={20}/>
      </div>
    </div>
  )
  
  VoteScore.propTypes = {
    scoreUp: func.isRequired,
    scoreDown: func.isRequired,
    arrowColor: string,
  }
  
  return VoteScore
}


export default createVoteScore(React)