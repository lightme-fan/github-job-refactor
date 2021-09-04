import React from 'react'

import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom'

import { MainContainer } from './global-styles'
import { DetailPage } from './pages/DetailsPage'

function App() {
  return (
    <MainContainer>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/:id'>
          <DetailPage />
        </Route>
      </Switch>
    </MainContainer>
  )
}

export default App
