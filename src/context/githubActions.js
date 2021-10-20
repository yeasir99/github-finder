//Search user
import axios from 'axios'
import * as ACTION from './Types'

export const searchUser = dispatch => async text => {
  setLoading(dispatch)

  const res = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`,
  )
  dispatch({
    type: ACTION.SEARCH_USERS,
    payload: res.data.items,
  })
}

// Get User
export const getUser = dispatch => async username => {
  setLoading(dispatch)

  const res = await axios.get(
    `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`,
  )

  dispatch({
    type: ACTION.GET_USER,
    payload: res.data,
  })
}

// Get Repos
export const getUserRepos = dispatch => async username => {
  setLoading(dispatch)

  const res = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`,
  )

  dispatch({
    type: ACTION.GET_REPOS,
    payload: res.data,
  })
}

// Clear Users
export const clearUsers = dispatch => dispatch({type: ACTION.CLEAR_USERS})

// Set Loading
export const setLoading = dispatch => dispatch({type: ACTION.SET_LOADING})
