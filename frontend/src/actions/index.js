export const POST_COMMENT = 'POST_COMMENT'
export const MAKE_COMMENT_VOTE = 'MAKE_VOTE'

const postComment = (commentObject) => ({
  type: POST_COMMENT,
  id: commentObject.id,
  timestamp: commentObject.timestamp,
  body: commentObject.body,
  author: commentObject.author,
  parentId: commentObject.parentId,
})

const makeCommentVote = ({ id, option }) => ({
  type: MAKE_COMMENT_VOTE,
  id,
  option
})


export default {
  postComment,
  makeCommentVote
}