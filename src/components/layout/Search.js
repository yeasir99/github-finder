import {useState} from 'react'
import {useGithubState} from '../../context/GithubState'
import {searchUser, clearUsers} from '../../context/githubActions'

const Search = () => {
  const [queryText, setQueryText] = useState('')

  const [{allUser}, dispatch] = useGithubState()

  //submit form

  const handleSubmit = e => {
    e.preventDefault()
    searchUser(dispatch)(queryText)
    setQueryText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={queryText}
          placeholder="Search User..."
          onChange={e => setQueryText(e.target.value)}
        />
        <input
          type="submit"
          value="submit"
          className="btn btn-block btn-dark"
        />
      </form>
      {allUser.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={() => clearUsers(dispatch)}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
