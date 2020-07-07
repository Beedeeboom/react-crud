import React, { useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Bookmarks from './Bookmarks'
import NoMatch from './NoMatch'
import Navbar from './Navbar'
import { stateReducer, StateContext } from './store'

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, { bookmarks: [] })

  return (
    <StateContext.Provider value={ { state, dispatch } }>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route component={NoMatch} />
      </Switch>
    </StateContext.Provider>
  )
}

export default App