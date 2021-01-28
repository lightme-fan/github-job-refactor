import React, { useContext, useState } from 'react'

import { GlobalContext } from '../context/ContextProvider'
import { SearchByLocation, SearchByType } from '../components'
import { Search } from '../global-styles'

export default function SearchContainer() {
    const { jobs, dispatch } = useContext(GlobalContext) 
    const [ fullTime, setFullTime ] = useState('Full Time')
    const [ searchLocation, setSearchLocation ] = useState('')

    const handleCheckbox = (e) => {
        const filteredJobs = jobs.filter(job => job.type === fullTime)
        dispatch({ type: 'SEARCH_BY_TYPE', newJob: filteredJobs})
    }

    const handleSearchLocation = (e) => {
        const value = e.target.value;
        setSearchLocation(value)
        const searchJobs = jobs.filter(job => job.location.toLowerCase().includes(searchLocation.toLocaleLowerCase()))
        dispatch({type: 'SEARCH_BY_LOCATION', newJob: searchJobs})
    }

    return (
        <Search>
            <SearchByType>
                <SearchByType.Input 
                    value={fullTime}
                    onChange={handleCheckbox}
                />
                Full time
            </SearchByType>
            <SearchByLocation>
                <SearchByLocation.Title>Location</SearchByLocation.Title>
                <SearchByLocation.Input 
                    placeholder="City, State, Zip code or country" 
                    value={searchLocation}
                    onChange={handleSearchLocation}
                />
                <SearchByLocation.Location/>
            </SearchByLocation>
        </Search>
    )
}
