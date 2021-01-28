import React from 'react'

import {
    Container,
    List,
    Item,
    Image,
    Wrapper,
    Owner,
    Name,
    Type,
    More,
    Location,
    Time,
    Pagination
} from './styles/jobs'

function Jobs({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jobs.List = function JobsList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Jobs.Item = function JobsItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>
}

Jobs.Image = function JobsImage({src, children, ...restProps}) {
    return <Image src={src} {...restProps}/>
}

Jobs.Wrapper = function JobsWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Jobs.Owner = function JobsOwner({children, ...restProps}) {
    return <Owner {...restProps}>{children}</Owner>
}

Jobs.Name = function JobsName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}

Jobs.Type = function JobsType({children, ...restProps}) {
    return <Type {...restProps}>{children}</Type>
}

Jobs.More = function JobsMore({children, ...restProps}) {
    return <More {...restProps}>{children}</More>
}

Jobs.Location = function JobsLocation({children, ...restProps}) {
    return <Location {...restProps}>{children}</Location>
}

Jobs.Time = function JobsTime({children, ...restProps}) {
    return <Time {...restProps}>{children}</Time>
}

Jobs.Pagination = function JobsPagination({children, ...restProps}) {
    return <Pagination {...restProps}>{children}</Pagination>
}

export default Jobs
