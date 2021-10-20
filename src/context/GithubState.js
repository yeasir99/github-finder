import React, {useReducer} from 'react'
import axios from 'axios'
import githubContext from './githubContext'
import githubReducer from './githubReducer'
import * as ACTION from './Types'

const GithubState = ({children}) => {
  const initialState = {
    allUser: [],
    singleUser: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  //Search user

  const searchUser = async text => {
    setLoading()

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`,
    )
    dispatch({
      type: ACTION.SEARCH_USERS,
      payload: res.data.items,
    })
  }

  // Get User
  const getUser = async username => {
    setLoading()

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`,
    )

    dispatch({
      type: ACTION.GET_USER,
      payload: res.data,
    })
  }

  // Get Repos
  const getUserRepos = async username => {
    setLoading()

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`,
    )

    dispatch({
      type: ACTION.GET_REPOS,
      payload: res.data,
    })
  }

  // Clear Users
  const clearUsers = () => dispatch({type: ACTION.CLEAR_USERS})

  // Set Loading
  const setLoading = () => dispatch({type: ACTION.SET_LOADING})

  return (
    <githubContext.Provider
      value={{
        allUser: state.allUser,
        singleUser: state.singleUser,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        getUser,
        getUserRepos,
        clearUsers,
      }}
    >
      {children}
    </githubContext.Provider>
  )
}

export default GithubState
