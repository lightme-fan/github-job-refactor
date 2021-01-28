import React from 'react'
import { SearchByLocation, SearchByType } from '../components'

import { Search } from '../global-styles'

export default function SearchContainer() {
    return (
        <Search>
            <SearchByType>
                <SearchByType.Input/>
                Full time
            </SearchByType>
            <SearchByLocation>
                <SearchByLocation.Title>Location</SearchByLocation.Title>
                <SearchByLocation.Input placeholder="City, State, Zip code or country" />
                <SearchByLocation.Location/>
            </SearchByLocation>
        </Search>
    )
}
