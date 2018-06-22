import actions, { CREATE_POST } from '../actions/post'

export const post = (state = {}, action) => {
  const { type, ...post } = action

  switch (type) {
    default:
      return state
    case CREATE_POST:
      return {
        ...state,
        [post.id]: post
      }
  }
}

