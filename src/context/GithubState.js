import {useReducer, createContext, useContext} from 'react'
import githubReducer from './githubReducer'

const GithubContext = createContext()

GithubContext.displayName = 'GithubContext'

export const useGithubState = () => {
  const context = useContext(GithubContext)
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

  return <GithubContext.Provider value={[state, dispatch]} {...props} />
}
