import { assert } from 'chai';
import { post as postReducer } from "../post";
import postActions from "../../actions/post";

describe('post Reducer', () => {
  it('return from postReducer when no type passed in action', () => {
    const postData = {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
    },
      previousState = {
        'remainingId': {
          id: 'remainingId',
          timestamp: 12741227232,
          title: 'TEST',
          body: 'BODY.',
          author: '123Oslc',
          category: 'react',
        }
      },
      actual = postReducer(previousState, postData),
      expected = {
        ...previousState,
      }
    assert.deepEqual(actual, expected)
  })
  
  it('return from postReducer when post created', () => {
    const postData = {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
    },
      previousState = {
        'remainingId': {
          id: 'remainingId',
          timestamp: 12741227232,
          title: 'TEST',
          body: 'BODY.',
          author: '123Oslc',
          category: 'react',
        }
      },
      actual = postReducer(previousState, postActions.createPost(postData)),
      expected = {
        ...previousState,
        [postData.id]: postData
      }
    assert.deepEqual(actual, expected)
  })
})