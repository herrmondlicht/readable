import React, { Component } from 'react';
import './index.css';
import Comment from "../Comment";
import VoteScore from '../VoteScore'
class App extends Component {
  render() {
    return (
      <div style={{
        padding: '20px'
      }}>
        <VoteScore
          scoreUp={() => {}}
          scoreDown={() => {}}
        />
        {/*<Comment*/}
          {/*author={'Guilherme'}*/}
          {/*voteScore={'10'}*/}
          {/*body={"AEEEEEEE"}*/}
          {/*timestamp={123574418238}*/}
        {/*/>*/}
        {/*<Comment*/}
          {/*author={'Guilherme'}*/}
          {/*voteScore={'10'}*/}
          {/*body={"AEEEEEEE"}*/}
          {/*timestamp={123574418238}*/}
        {/*/>*/}
        {/*<Comment*/}
          {/*author={'Guilherme'}*/}
          {/*voteScore={'10'}*/}
          {/*body={"AEEEEEEE"}*/}
          {/*timestamp={123574418238}*/}
        {/*/>*/}
        {/*<Comment*/}
          {/*author={'Guilherme'}*/}
          {/*voteScore={'10'}*/}
          {/*body={"AEEEEEEE"}*/}
          {/*timestamp={123574418238}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default App;
