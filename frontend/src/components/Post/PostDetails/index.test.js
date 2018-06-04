import { assert } from "chai";
import React from 'react';
import { createPostDetails } from "./index";
import { shallow } from "../../../testUtils";
import { stub } from 'sinon'
describe('PostListItem', () => {
  const PostDetails = createPostDetails(React)

  const renderWithRequired = (props) => shallow(PostDetails).withProps({
    match: {
      params: 'postId'
    },
    post: {},
    ...props,
  })

  it('typeof PostDetails', () => {
    assert.isFunction(PostDetails, 'PostDetails must be a function')
  })

  it('rendering of VoteScore with correct params', () => {
    const id = '1228ccbasd22baa',
      wrapper = renderWithRequired({
        post: {
          id
        }
      }),
      VoteScoreProps = wrapper.find('VoteScore').props();
  })

  it('rendering of post body', () => {
    const body = 'this is the body of the post.',
      wrapper = renderWithRequired({ post: { body } }),
      actual = wrapper.text()
    assert.include(actual, body, "render() must render the post's body")
  })


  it('rendering of CommentList with correct params', () => {
    const commentList = [
      {id:'123', body:'abc'},
    ],
    wrapper = renderWithRequired({
      commentList
    }),
    actual = wrapper.find('CommentList').props().commentList;
    assert.equal(actual, commentList, 'render() must render a CommentList with correct params')
  })

  it('calling of voteScoreHandler by voteScoreFunction', () => {
    const voteScoreHandler = stub(),
      postId = 'postId',
      option = 'downVote',
      wrapper = renderWithRequired({ voteScoreHandler }),
      voteScoreFunction = wrapper.instance().voteScoreFunction,
      expected = 'test worked'

    voteScoreHandler.withArgs(postId, option).returns(expected);

    const actual = voteScoreFunction(postId, option);
    assert.equal(actual, expected, 'voteScoreFunction must call voteScoreHandler with correct args')
  });

  it('calling of commentsFromPost by getPostComments', () => {
    const commentsFromPost = stub(),
      postId = 'postId',
      wrapper = renderWithRequired({ commentsFromPost }),
      getPostComments = wrapper.instance().getPostComments,
      expected = 'test worked';

    commentsFromPost.withArgs(postId).returns(expected);

    const actual = getPostComments(postId);
    assert.equal(actual, expected, 'getPostComments must call commentsFromPost with correct args')
  });

  it('calling of getPostComments by componentDidMount', () => {
    const postId = 'postId',
      wrapper = renderWithRequired({
        post: {
          id: postId
        }
      }),
      instance = wrapper.instance(),
      getPostCommentsStub = stub(instance,'getPostComments'),
      componentDidMount = instance.componentDidMount,
      expected = 'test worked';

      getPostCommentsStub.withArgs(postId).returns(expected);

    const actual = componentDidMount(postId);
    assert.equal(actual, expected, 'componentDidMount must call getPostComments with correct args')
  });



})