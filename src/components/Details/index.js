import React from 'react'

import { 
    Container, 
    BackHome, 
    Wrapper, 
    Heading, 
    Title, 
    Email, 
    Description,
    DescHeading,
    Button,
    Time,
    Company,
    CompanyLogo,
    CompanyName,
    CompanyLocation,
    Explanation } from './styles/details'

function Details({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Details.Wrapper = function DetailsWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Details.Heading = function DetailsHeading({children, ...restProps}) {
    return <Heading {...restProps}>{children}</Heading>
}

Details.BackHome = function DetailsBackHome({children, ...restProps}) {
    return <BackHome {...restProps}>{children}</BackHome>
}

Details.Title = function DetailsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Details.Email = function DetailsEmail({children, ...restProps}) {
    return <Email {...restProps}>{children}</Email>
}

Details.Description = function DetailsDescription({children, ...restProps}) {
    return <Description {...restProps}>{children}</Description>
}

Details.DescHeading = function DetailsDescHeading({children, ...restProps}) {
    return <DescHeading {...restProps}>{children}</DescHeading>
}

Details.Button = function DetailsButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Details.Time = function DetailsTime({children, ...restProps}) {
    return <Time {...restProps}>{children}</Time>
}

Details.Company = function DetailsCompany({children, ...restProps}) {
    return <Company {...restProps}>{children}</Company>
}

Details.CompanyLogo = function DetailsCompanyLogo({children, ...restProps}) {
    return <CompanyLogo {...restProps}>{children}</CompanyLogo>
}

Details.CompanyName = function DetailsCompanyName({children, ...restProps}) {
    return <CompanyName {...restProps}>{children}</CompanyName>
}

Details.CompanyLocation = function DetailsCompanyLocation({children, ...restProps}) {
    return <CompanyLocation {...restProps}>{children}</CompanyLocation>
}

Details.Explanation = function DetailsExplanation({children, ...restProps}) {
    return <Explanation {...restProps}>{children}</Explanation>
}

export default Details
