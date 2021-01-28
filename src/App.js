import React from 'react'

import { Container } from './components/globalSearch/styles/globalSearch'
import Home from './pages/Home'
import { Route, Switch, useParams } from 'react-router-dom'

import { MainContainer } from './global-styles'
import { DetailPage } from './pages/DetailsPage'

function App() {
    return (
        <MainContainer>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/:id">
                    <DetailPage />
                </Route>
            </Switch>
        </MainContainer>
    )
}

export default App
