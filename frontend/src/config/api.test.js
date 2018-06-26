import { _setToken, _getToken, createPost, getEndpoint } from "./api";
import { assert as sinonAssert, stub } from 'sinon'
import { assert } from 'chai'
describe('api', () => {
  const getItem = stub(),
    setItem = stub(),
    storage = {
      getItem,
      setItem,
    }

  beforeEach(() => {
    setItem.reset();
    getItem.reset();
  })

  it('return of  _getToken when no token in storage', () => {
    getItem.withArgs('token').returns(undefined);
    const setToken = stub(),
      token = '12s124';
    setToken.returns(token)

    const actual = _getToken({ storage, setToken })

    assert.equal(actual, token, 'must create a token')
  })

  it('return of  _getToken when no token in storage', () => {
    const token = '12s124',
      setToken = stub()
    getItem.withArgs('token').returns(token);

    const actual = _getToken({ storage, setToken })

    assert.equal(actual, token, 'returned token must be correct')
    sinonAssert.notCalled(setToken)
  })

  it('return of setToken', () => {
    _setToken({ storage })
    const expected = storage.setItem.calledWith('token');
    assert(expected, 'must register new token')
  })



  //parei aqui
})