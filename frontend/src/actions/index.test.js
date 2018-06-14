import actions, { POST_COMMENT } from '.';
import { assert } from 'chai';

describe('Redux Actions', () => {

  it('return from postComment', () => {
    const commentObject = {
      id: 'comment.id',
      timestamp: 1467166872634,
      body: 'comment.body',
      author: 'comment.author',
      parentId: 'comment.parentId',
    },
      { postComment } = actions,
      actual = postComment(commentObject),
      expected = {
        type: POST_COMMENT,
        ...commentObject
      }

    assert.deepEqual(actual, expected, 'postComment Action must retrieve the expected object')
  })
})