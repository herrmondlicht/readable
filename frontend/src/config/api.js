import md5 from 'md5'

const API_LINK = process.env.API_HOST

export const getEndpoint = (endpoint) => `${API_LINK}/${endpoint}`

export const createPost =
  (post, { localFetch = fetch, authHeader = _authHeader } = {}) =>
    localFetch(getEndpoint('posts'), mountRequisitonFor('POST')(post)(authHeader()))

const _authHeader = ({ getToken = _getToken } = {}) => ({ Authorization: getToken() })

const mountRequisitonFor = (method) => (body) => (headers) => ({
  method,
  body,
  headers
})

export const _getToken = ({ storage = global.localStorage, setToken = _setToken }) => storage.getItem('token') || setToken()

export const _setToken = ({ storage = global.localStorage } = {}) => {
  const token = md5((new Date).valueOf())
  storage.setItem('token', token)
  return token
}