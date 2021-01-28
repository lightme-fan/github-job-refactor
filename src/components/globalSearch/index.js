import React from 'react'

import { 
    Container,
    Wrapper,
    Input,
    Button } from './styles/globalSearch'

function GlobalSearch({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

GlobalSearch.Wrapper = function GlobalSearchWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

GlobalSearch.Input = function GlobalSearchInput({ children, ...restProps }) {
    return <Input type="text" {...restProps} />
}

GlobalSearch.Button = function GlobalSearchButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

export default GlobalSearch
