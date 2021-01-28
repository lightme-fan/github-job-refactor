import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const CORS_URL = 'https://cors-anywhere.herokuapp.com/'
const API_URL = 'https://jobs.github.com/positions.json'
const description = ''
const location = ''
const fulltime = true
const page = 1
const API = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fulltime}`

const initialValue = {
    loading: true,
    jobs: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_JOBS': {
            return {
                ...state,
                loading: false,
                jobs: action.allJobs
            }
        }
        case 'GLOBAL_SEARCH': {
            return {
                ...state,
                loading: false,
                jobs: action.newJob 
            }
        }

        case 'SEARCH_BY_TYPE': {
            return {
                ...state,
                loading: false,
                jobs: action.newJob 
            }
        }

        case 'SEARCH_BY_LOCATION': {
            return {
                ...state,
                loading: false,
                jobs: action.newJob 
            }
        }

        case 'SEARCH_BY_CITIES': {
            return {
                ...state,
                loading: false,
                jobs: action.newJob 
            }
        }
        default: {
            return state
        }
    }
}

function useAppReducer() {
    const [ state, dispatch ] = useReducer(reducer, initialValue)

    useEffect(async () => {
        const response = await axios(CORS_URL+API_URL)
        const data = await response.data
        dispatch({type: 'FETCH_JOBS', allJobs: data})
    }, [])

    return [ state, dispatch ]
}

export default useAppReducer
