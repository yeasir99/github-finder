import React, {useState, useContext} from 'react'
import githubContext from '../../context/githubContext'

const Search = () => {
  const [text, setText] = useState('')

  const {searchUser, clearUsers, allUser} = useContext(githubContext)

  //submit form

  const handleSubmit = e => {
    e.preventDefault()
    searchUser(text)
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
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
