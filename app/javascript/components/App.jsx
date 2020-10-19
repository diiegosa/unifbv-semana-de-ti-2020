import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Airlines from './Airlines'
import Airline from './Airline'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Airlines} />
      <Route exact path="/:slug" component={Airline} />
    </Switch>
  )
}

export default App
