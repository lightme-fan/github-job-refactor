import React from 'react'
import { Jobs } from '../components'

function JobContainer() {
    return (
        <Jobs>
            <Jobs.List>
                <Jobs.Item>
                    <Jobs.Image src='https://bit.ly/33QVyLX' alt="job" />
                    <Jobs.Wrapper>
                        <Jobs.Owner>Fanilo</Jobs.Owner>
                        <Jobs.Name>Front-end development</Jobs.Name>
                        <Jobs.Type>Full Time</Jobs.Type>
                        <Jobs.More>
                            <Jobs.Location>New York</Jobs.Location>
                            <Jobs.Time>2 days ago</Jobs.Time>
                        </Jobs.More>
                    </Jobs.Wrapper>
                </Jobs.Item>
            </Jobs.List>
        </Jobs>
    )
}

export default JobContainer
