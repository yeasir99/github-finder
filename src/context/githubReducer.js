import * as ACTION from './Types'

export default (state, action) => {
  switch (action.type) {
    case ACTION.SEARCH_USERS:
      return {
        ...state,
        allUser: action.payload,
        loading: false,
      }

    case ACTION.GET_USER:
      return {
        ...state,
        singleUser: action.payload,
        loading: false,
      }
    case ACTION.CLEAR_USERS:
      return {
        ...state,
        allUser: [],
        loading: false,
      }
    case ACTION.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
    case ACTION.SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
