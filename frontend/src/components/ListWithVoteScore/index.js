import React from 'react'
import { string, array, func } from "prop-types";
import './index.css'
import withVoteScore from "../VoteScoreComposer";

export const TYPE_OPTIONS = {
  post: 'post',
  comment: 'comment'
}

export const createListWithVoteScore = React => {

  class ListWithVoteScore extends React.PureComponent {

    render() {
      const { list, Component, voteScoreHandler, type } = this.props;
      return (
        <div>
          {list.map(listItem => (
            <div key={listItem.id} className="post-list__item">
              {
                withVoteScore(
                  {
                    id: listItem.id,
                    scoreHandlerFunction: voteScoreHandler,
                  },
                  <Component {...{ [TYPE_OPTIONS[type]]: listItem }} />)
              }
            </div>
          ))}
        </div>
      )
    }
  }

  ListWithVoteScore.propTypes = {
    Component: func.isRequired,
    list: array.isRequired,
    voteScoreHandler: func.isRequired,
    type: string.isRequired,
  }

  return ListWithVoteScore

}


export default createListWithVoteScore(React)