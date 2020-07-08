import React, { useReducer, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Bookmarks from './Bookmarks'
import NoMatch from './NoMatch'
import Navbar from './Navbar'
import { stateReducer, StateContext } from './store' 
import Axios from 'axios'
import CreateBookmark from './CreateBookmark'

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, { bookmarks: [] })

  useEffect(() => {
    Axios.get('http://localhost:4000/api/bookmarks') //get returns a promise
    .then(res => {
      //Update bookmarks in the reducer with the value res.data
      dispatch({
        type: 'setBookmarks',
        data: res.data
      })
    })
  }, []) //we need the second parameter, without that useEffect gets triggered whenever the state changes.
  //we want to limit it to trigger only when the state changes. Without the second param it will constantly run in the background.

  return (
    <StateContext.Provider value={{state, dispatch}}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/bookmarks/new" component={CreateBookmark} />
        <Route component={NoMatch} />
      </Switch>
    </StateContext.Provider>
  )
}

export default App