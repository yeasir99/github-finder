import React, {useState} from 'react'
import {useGithubState} from '../../context/GithubState'
import {searchUser, clearUsers} from '../../context/githubActions'

const Search = () => {
  const [text, setText] = useState('')

  const [{allUser}, dispatch] = useGithubState()

  //submit form

  const handleSubmit = e => {
    e.preventDefault()
    searchUser(text, dispatch)
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search User..."
          onChange={e => setText(e.target.value)}
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
          onClick={clearUsers(dispatch)}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
