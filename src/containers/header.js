import React, { useContext, useState } from 'react'
import { Header,  GlobalSearch} from '../components'
import { GlobalContext } from '../context/ContextProvider'

export default function HeaderContainer() {
    const [ search, setSearch ] = useState('')
    const { jobs, dispatch } = useContext(GlobalContext)
    
    const handleGlobalSearch = (e) => {
        e.preventDefault()
        const filteredJobs = jobs.filter(job => {
            const searchByTitle = job.title.toLowerCase().includes(search.toLocaleLowerCase())
            const searchByCompany = job.company.toLowerCase().includes(search.toLocaleLowerCase())
            const searchByType = job.type.toLowerCase().includes(search.toLocaleLowerCase())
            const searchByLocation = job.location.toLowerCase().includes(search.toLocaleLowerCase())
            return searchByTitle || searchByCompany || searchByType || searchByLocation 
        })
        
        dispatch({type: 'GLOBAL_SEARCH', newJob: filteredJobs})        
    }

    return (
        <Header>
            <Header.Title>
                <Header.Logo href='/logo'>
                    Github <Header.Span>Job</Header.Span>
                </Header.Logo>
            </Header.Title>

            <GlobalSearch onSubmit={handleGlobalSearch}>
                <GlobalSearch.Wrapper>
                    <GlobalSearch.Input 
                        placeholder="Title, Company, Expertise"
                        value={search} 
                        onChange={({ target }) => setSearch(target.value)}
                    />
                    <GlobalSearch.Button>Search</GlobalSearch.Button>
                </GlobalSearch.Wrapper>
            </GlobalSearch>
        </Header>
    )
}
