import React, { Component } from 'react';
import './index.css';
import PostList from "../Post/PostList";
import CommentList from '../Comment/CommentList';
import CommentForm from '../Comment/CommentForm';

class App extends Component {
  render() {
    const postList = {
      "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
      }
    },
      commentList = [{
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: '8tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      }]

    return (
      <div style={{
        padding: '20px'
      }}>
        <div style={{ marginTop: '50px' }}>
          <PostList
            postList={Object.values(postList)}
          />
          <CommentList
            commentList={Object.values(commentList)}
          />
          <CommentForm postComment={(data) => console.log('data', data)}/>
        </div>
      </div>
    );
  }
}

export default App;
