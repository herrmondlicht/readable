import React, { Component } from 'react';
import './index.css';
import Comment from "../Comment";
import VoteScore from '../VoteScore'
import withVoteScore from "../VoteScoreComposer";
import PostInfo from "../Post/PostInfo";
import PostListItem from "../Post/PostList/PostListItem";
class App extends Component {
  render() {
    return (
      <div style={{
        padding: '20px'
      }}>
        {withVoteScore({ scoreUp: () => { }, scoreDown: () => { } },
          <Comment
            author={'Guilherme'}
            voteScore={'10'}
            body={"lorem ipsum"}
            timestamp={123574418238}
          />)}

        <div style={{ marginTop: '50px' }}>
          <PostListItem
            post={{
              timestamp: 1467166872634,
              author: 'thingtwo',
              category: 'react',
              voteScore: 6,
              commentCount: 2,
              body: 'testing',
              title: 'Testing the title',
              id:123,
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
