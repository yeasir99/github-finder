import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import {GithubState} from './context/GithubState'
import User from './components/users/User'
import './App.css'

function App() {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:login" component={User} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  )
}

export default App
