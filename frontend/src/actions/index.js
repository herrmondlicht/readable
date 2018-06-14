export const POST_COMMENT = 'POST_COMMENT'


const postComment = (commentObject) => ({
  type: POST_COMMENT,
  id: commentObject.id,
  timestamp: commentObject.timestamp,
  body: commentObject.body,
  author: commentObject.author,
  parentId: commentObject.parentId,
})


export default {
  postComment
}