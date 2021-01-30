import React from 'react'

import { Container, Paragraph } from './styles/footer'

export default function Footer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Paragraph = function FooterParagraph({children, ...restProps}) {
    return <Paragraph {...restProps}>{children}</Paragraph>
} 