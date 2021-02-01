import React, { createContext } from 'react'
import useAppReducer from '../reducer/useAppReducer'

const GlobalContext = createContext()

function ContextProvider({children}) {
    const [ state, dispatch, fetchData ] = useAppReducer()
    const { loading, jobs } = state
    return (
        <GlobalContext.Provider value={{ loading, jobs, dispatch, fetchData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { ContextProvider, GlobalContext }
