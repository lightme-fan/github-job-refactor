import React from 'react'

import HeaderContainer from '../containers/header'
import JobContainer from '../containers/jobs'
import SearchContainer from '../containers/search'
import { Wrapper } from '../global-styles'

function Home() {
    return (
        <div>
            <HeaderContainer />
            <Wrapper>
                <SearchContainer />
                <JobContainer />
            </Wrapper>
        </div>
    )
}

export default Home
