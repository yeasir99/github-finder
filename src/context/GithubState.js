import React, {useReducer, createContext, useContext} from 'react'

import githubReducer from './githubReducer'

const githubContext = createContext()

export const useGithubState = () => {
  const context = useContext(githubContext)
  if (!context) {
    throw new Error(
      'Component must be wrapped with in GithubStateContextProvider',
    )
  }
  return context
}

export const GithubState = props => {
  const [state, dispatch] = useReducer(githubReducer, {
    allUser: [],
    singleUser: {},
    repos: [],
    loading: false,
  })

  return <githubContext.Provider value={[state, dispatch]} {...props} />
}
