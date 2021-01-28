import React from 'react'
import { Header,  GlobalSearch} from '../components'

export default function HeaderContainer() {
    return (
        <Header>
            <Header.Title>
                <Header.Logo href='/logo'>
                    Github <Header.Span>Job</Header.Span>
                </Header.Logo>
            </Header.Title>

            <GlobalSearch>
                <GlobalSearch.Wrapper>
                    <GlobalSearch.Input placeholder="Title, Company, Expertise"/>
                    <GlobalSearch.Button>Search</GlobalSearch.Button>
                </GlobalSearch.Wrapper>
            </GlobalSearch>
        </Header>
    )
}
