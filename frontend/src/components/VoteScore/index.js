import React from 'react'
import { func, string } from "prop-types";
import FaArrowUp from "react-icons/lib/fa/arrow-up";
import FaArrowDown from "react-icons/lib/fa/arrow-down";
import './index.css'

export const createVoteScore = React => {

  class VoteScore extends React.Component {

    getVoteScoreFunction = (id, option) =>
      () =>
        this.props.voteScoreHandler && this.props.voteScoreHandler(id, option)
    
    render() {
      const { id, arrowColor } = this.props;
      return (
        <div className="vote-score-component" style={{ color: arrowColor }}>
          <div className="vote-score-component__voter" onClick={this.getVoteScoreFunction(id,'upVote')}>
            <FaArrowUp width={20} height={20} />
          </div>
          <div className="vote-score-component__voter" onClick={this.getVoteScoreFunction(id,'downVote')}>
            <FaArrowDown width={20} height={20} />
          </div>
        </div>
      )
    }
  }

  VoteScore.propTypes = {
    voteScoreHandler: func.isRequired,
    id: string,
    arrowColor: string,
  }

  return VoteScore
}


export default createVoteScore(React)