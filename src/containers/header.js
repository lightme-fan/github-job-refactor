import React, { useContext, useEffect, useState } from 'react'
import { Header,  GlobalSearch} from '../components'
import { GlobalContext } from '../context/ContextProvider'

export default function HeaderContainer() {
    const { jobs, dispatch, location, fetchData } = useContext(GlobalContext)
    const [ search, setSearch ] = useState('')
    const [ searchResult, setSearchResult ] = useState([])
    
    const handleGlobalSearch = (e) => {
        e.preventDefault() 
        const filteredJobs = jobs.filter(job => {
            const searchByTitle = job.title.toLowerCase().includes(search.toLocaleLowerCase())
            const searchByCompany = job.company.toLowerCase().includes(search.toLocaleLowerCase())
            const searchByType = job.type.toLowerCase().includes(search.toLocaleLowerCase())
            const searchByLocation = job.location.toLowerCase().includes(search.toLocaleLowerCase())
            return searchByTitle || searchByCompany || searchByType || searchByLocation 
        })
        setSearchResult(filteredJobs)
        dispatch({type: 'GLOBAL_SEARCH', newJob: filteredJobs}) 
    }

    function handleKeyDown(e) {
        if (e.keyCode === 8) {
            setSearch('')
        }    
    }

    useEffect(() => {
        if (search === '') {
            fetchData()
        }
    }, [search])

    return (
        <Header>
            <Header.Title>
                <Header.Logo href='/logo'>
                    Github <Header.Span>Job</Header.Span>
                </Header.Logo>
            </Header.Title>

            <GlobalSearch onSubmit={handleGlobalSearch}>
                <GlobalSearch.Wrapper>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 6C20.58 6 21.05 6.2 21.42 6.59C21.8 7 22 7.45 22 8V19C22 19.55 21.8 20 21.42 20.41C21.05 20.8 20.58 21 20 21H4C3.42 21 2.95 20.8 2.58 20.41C2.2 20 2 19.55 2 19V8C2 7.45 2.2 7 2.58 6.59C2.95 6.2 3.42 6 4 6H8V4C8 3.42 8.2 2.95 8.58 2.58C8.95 2.2 9.42 2 10 2H14C14.58 2 15.05 2.2 15.42 2.58C15.8 2.95 16 3.42 16 4V6H20ZM4 8V19H20V8H4ZM14 6V4H10V6H14Z" fill="#B9BDCF" />
                </svg>
                    <GlobalSearch.Input 
                        placeholder="Title, Company, Expertise"
                        name='search'
                        value={search} 
                        onChange={({ target }) => setSearch(target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <GlobalSearch.Button>Search</GlobalSearch.Button>
                </GlobalSearch.Wrapper>
            </GlobalSearch>
        </Header>
    )
}
