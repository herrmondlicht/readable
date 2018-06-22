import actions, { CREATE_COMMENT, MAKE_COMMENT_VOTE } from '../comment';
import { assert } from 'chai';

describe('Redux Actions', () => {

  it('return from createComment', () => {
    const commentObject = {
      id: 'comment.id',
      timestamp: 1467166872634,
      body: 'comment.body',
      author: 'comment.author',
      parentId: 'comment.parentId',
    },
      { createComment } = actions,
      actual = createComment(commentObject),
      expected = {
        type: CREATE_COMMENT,
        ...commentObject
      }
    assert.deepEqual(actual, expected, 'createComment Action must return the expected object')
  })


  it('return from voteComment', () => {
    const voteCommentObject = {
      id: 'comment.id',
      option: 'upVote'
    },
      { makeCommentVote } = actions,
      actual = makeCommentVote(voteCommentObject),
      expected = {
        type: MAKE_COMMENT_VOTE,
        ...voteCommentObject
      }
    assert.deepEqual(actual, expected, 'createComment Action must return the expected object')
  })


})