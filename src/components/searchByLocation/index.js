import React, { useContext, useState } from 'react'

import locations from '../../../locations'
import { GlobalContext } from '../../context/ContextProvider'
import { 
    Container,
    Title,
    Input,
    Location } from './styles/search-by-location'

function SearchByLocation({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

SearchByLocation.Title = function SearchByLocationTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

SearchByLocation.Input = function SearchByLocationInput({children, ...restProps}) {
    return <Input type="text" {...restProps} />
}

SearchByLocation.Location = function SearchByLocationLocation({children, ...restProps}) {
    const { jobs, dispatch } = useContext(GlobalContext)
    const [ searchValue, setSearchValue ] = useState('')

    const handleCheckboxOnChange = (e) => {
        const filterJobs = jobs.filter(job => job.location.toLowerCase().includes(e.target.value.toLowerCase()))
        dispatch({ type: 'SEARCH_BY_CITIES', newJob: filterJobs})
    }

    return (
        <Location type="text" {...restProps}>
            {locations.map(item => 
                <label key={item.id}>
                    <input 
                        type="checkbox" 
                        value={item.place}
                        onChange={handleCheckboxOnChange}
                    />
                    {item.place}
                </label>
            )}
        </Location>
    )
}

export default SearchByLocation
