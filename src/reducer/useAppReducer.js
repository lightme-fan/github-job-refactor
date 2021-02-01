import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const CORS_URL = 'https://cors-anywhere.herokuapp.com/'

const initialValue = {
    loading: true,
    location: '',
    description: '',
    full_time: true,
    jobs: []
}

function reducer(state, action) {
    switch (action.type) {

        case 'TEST': {
            return {
                ...state,
                loading: false,
                jobs: action.allJobs
            }
        }
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
                location: action.newLocation,
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

        case 'FETCH_DATA_BACK': {
            return {
                ...state,
                loading: false,
                jobs: action.allJobs
            }
        }
        default: {
            return state
        }
    }
}

function useAppReducer() {
    const [ state, dispatch ] = useReducer(reducer, initialValue)
    const { location, full_time, description } = state

    const fetchData = async () => {
        // const response = await axios(`${CORS_URL}https://jobs.github.com/positions.json?description=${description}&full_time=${full_time}&location=${location}`)
        const response = await axios(`${CORS_URL}https://jobs.github.com/positions.json`)
        const data = await response.data
        dispatch({type: 'FETCH_JOBS', allJobs: data})
    }

    useEffect(async () => {
        fetchData()
    }, [])

    return [ state, dispatch, fetchData ]
}

export default useAppReducer
