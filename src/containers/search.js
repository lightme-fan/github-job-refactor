import React from 'react'
import { SearchByLocation, SearchByType } from '../components'

export default function SearchContainer() {
    return (
        <div>
            <SearchByType>
                <SearchByType.Input/>
                Full time
            </SearchByType>
            <SearchByLocation>
                <SearchByLocation.Title>Location</SearchByLocation.Title>
                <SearchByLocation.Input placeholder="City, State, Zip code or country" />
                <SearchByLocation.Location/>
            </SearchByLocation>
        </div>
    )
}
