export const CREATE_POST = 'CREATE_POST'

const createPost = (postObject) => ({
  type: CREATE_POST,
  id: postObject.id,
  timestamp: postObject.timestamp,
  title: postObject.title,
  body: postObject.body,
  author: postObject.author,
  category: postObject.category,
})


export default {
  createPost
}