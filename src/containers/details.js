import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Details, Header } from '../components'
import { GlobalContext } from '../context/ContextProvider'

function DetailContainer() {
    const { id } = useParams()
    const { jobs, dispatch } = useContext(GlobalContext)

    const job = jobs.find(item => item.id === id)
    console.log(job);

    return (
        <Details>
            <Header>
                <Header.Title>
                    <Header.Logo href='/logo'>
                        Github <Header.Span>Job</Header.Span>
                    </Header.Logo>
                </Header.Title>
            </Header>

            <Details.Wrapper>
                <Details.Heading>
                    <Link to="/">← Back to search</Link>
                    <Details.Title>How to apply</Details.Title>
                    <Details.Email dangerouslySetInnerHTML={{__html:job?.how_to_apply}} />
                </Details.Heading>
                <Details.Description>
                    <Details.DescHeading>
                        <Details.Button></Details.Button>
                    </Details.DescHeading>
                    <Details.Time></Details.Time>
                    <Details.Company>
                        <Details.CompanyLogo />
                        <div>
                            <Details.CompanyName></Details.CompanyName>
                            <Details.CompanyLocation></Details.CompanyLocation>
                        </div>
                    </Details.Company>
                    <Details.Explanation />
                </Details.Description>
            </Details.Wrapper>
        </Details>
    )
}

export default DetailContainer
