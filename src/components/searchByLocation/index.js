import React from 'react'

import locations from '../../../locations'
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
    
    return (
        <Location type="text" {...restProps}>
            {locations.map(item => 
                <label key={item.id}>
                    <input type="radio" />
                    {item.place}
                </label>
            )}
        </Location>
    )
}

export default SearchByLocation
