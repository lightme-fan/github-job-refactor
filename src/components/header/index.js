import React from 'react'

import { Container, Title, Logo, Span } from './styles/header'

function Header({ children , ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Title = function HeaderTitle({ children , ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.Logo = function HeaderLogo({ children , ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>
}

Header.Span = function HeaderSpan({ children , ...restProps }) {
    return <Span {...restProps}>{children}</Span>
}

export default Header
