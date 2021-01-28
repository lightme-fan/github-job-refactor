import React, { useContext, useState } from 'react'
import Pagination from "react-js-pagination";

import { Jobs } from '../components'
import { GlobalContext } from '../context/ContextProvider'

function JobContainer() {
    const { loading, jobs } = useContext(GlobalContext)
    
    // Pagination
    const [ activePage, setActivePage ] = useState( 1 );
    const [perPage, setPerPage] = useState(5)
    const [ pageClassName, setPageClassName] = useState('')
   
   // Current Jobs
    const lastPage  = activePage * perPage;
    const firstPage = lastPage - perPage;
    const currentJobs = jobs.slice( firstPage, lastPage );

    // Handle page number
    function handlePagination(pageNumber) {
        setPageClassName('active_page')
        setActivePage(pageNumber)
    }

    return (
        <Jobs>
            <Jobs.List>
                {currentJobs.map((job) => 
                    <Jobs.Item key={job.id}>
                        <Jobs.Image src={job.company_logo} alt="job" />
                        <Jobs.Wrapper>
                            <Jobs.Owner>{job.company}</Jobs.Owner>
                            <Jobs.Name>{job.title}</Jobs.Name>
                            <Jobs.Type>{job.type}</Jobs.Type>
                            <Jobs.More>
                                <Jobs.Location>{job.location}</Jobs.Location>
                                <Jobs.Time>2 days ago</Jobs.Time>
                            </Jobs.More>
                        </Jobs.Wrapper>
                    </Jobs.Item>
                )}
                <Jobs.Pagination>
                    <Pagination
                        activePage={ activePage }
                        itemsCountPerPage={ 3 }
                        totalItemsCount={ jobs.length }
                        pageRangeDisplayed={ 3 }
                        onChange={ handlePagination }
                    />
                </Jobs.Pagination>
            </Jobs.List>
        </Jobs>
    )
}

export default JobContainer
