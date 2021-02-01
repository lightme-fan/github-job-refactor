import React, { useContext, useState } from 'react'
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';

import { Jobs } from '../components'
import { GlobalContext } from '../context/ContextProvider'
import { formattedDate } from '../dateFormat/date-format'

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
    function handlePagination(x) {
        setActivePage(x)
    }

    return (
        <Jobs>
            <Jobs.List>
            {!loading ?
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
                <>    
                    {currentJobs.map((job) => 
                        <Jobs.Item key={job.id}>
                            <Link to={`/${job.id}`}>
                                <Jobs.Image src={job.company_logo} alt="job" />
                                <Jobs.Wrapper>
                                    <Jobs.Owner>{job.company}</Jobs.Owner>
                                    <Jobs.Name>{job.title}</Jobs.Name>
                                    <Jobs.Type>{job.type}</Jobs.Type>
                                    <Jobs.More>
                                        <Jobs.Location>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 2C5.36 2 2 5.36 2 9.5C2 13.64 5.36 17 9.5 17C13.64 17 17 13.64 17 9.5C17 5.36 13.64 2 9.5 2ZM8.75 15.4475C5.7875 15.08 3.5 12.56 3.5 9.5C3.5 9.035 3.56 8.5925 3.6575 8.1575L7.25 11.75V12.5C7.25 13.325 7.925 14 8.75 14V15.4475ZM13.925 13.5425C13.73 12.935 13.175 12.5 12.5 12.5H11.75V10.25C11.75 9.8375 11.4125 9.5 11 9.5H6.5V8H8C8.4125 8 8.75 7.6625 8.75 7.25V5.75H10.25C11.075 5.75 11.75 5.075 11.75 4.25V3.9425C13.9475 4.835 15.5 6.9875 15.5 9.5C15.5 11.06 14.9 12.4775 13.925 13.5425Z" fill="#B9BDCF"></path></svg>
                                            <span>{job.location}</span>
                                        </Jobs.Location>
                                        <Jobs.Time>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15ZM8.835 5.25H8.79C8.49 5.25 8.25 5.49 8.25 5.79V9.33C8.25 9.5925 8.385 9.84 8.6175 9.975L11.73 11.8425C11.985 11.9925 12.315 11.9175 12.465 11.6625C12.6225 11.4075 12.54 11.07 12.2775 10.92L9.375 9.195V5.79C9.375 5.49 9.135 5.25 8.835 5.25Z" fill="#B7BCCE"></path></svg>
                                            <span>{formattedDate(`${job.created_at}`)}</span>
                                        </Jobs.Time>
                                    </Jobs.More>
                                </Jobs.Wrapper>
                            </Link>
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
                </>}
            </Jobs.List>
        </Jobs>
    )
}

export default JobContainer
