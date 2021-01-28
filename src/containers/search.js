import React from 'react'
import { SearchByType } from '../components'

export default function SearchContainer() {
    return (
        <div>
            <SearchByType>
                <SearchByType.Input/>
                Full time
            </SearchByType>
        </div>
    )
}
