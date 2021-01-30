import React from 'react'

import HeaderContainer from '../containers/header'
import JobContainer from '../containers/jobs'
import SearchContainer from '../containers/search'
import { Wrapper } from '../global-styles'
import FooterContainer from '../containers/Footer'

function Home() {
    return (
        <div>
            <HeaderContainer />
            <Wrapper>
                <SearchContainer />
                <JobContainer />
            </Wrapper>
            <FooterContainer/>
        </div>
    )
}

export default Home
