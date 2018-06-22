import actions, { CREATE_POST } from '../post';
import { assert } from 'chai';

describe('Post Actions', () => {

  it('return from createPost', () => {
    const postObject = {
      id: 'post.id',
      timestamp: 1467166872634,
      body: 'post.body',
      author: 'post.author',
      title: 'post.title',
      category: 'post.category',
    },
      { createPost } = actions,
      actual = createPost(postObject),
      expected = {
        type: CREATE_POST,
        ...postObject
      }
    assert.deepEqual(actual, expected, 'createPost Action must return the expected object')
  })

})