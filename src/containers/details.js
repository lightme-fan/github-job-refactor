import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Details, Header } from '../components'
import { GlobalContext } from '../context/ContextProvider'

function DetailContainer() {
  const { id } = useParams()
  const { jobs, dispatch } = useContext(GlobalContext)

  const job = jobs.find((item) => item.id === id)

  return (
    <Details>
      <Header>
        <Header.Title>
          <Header.Logo href='/logo'>
            Github <Header.Span>Job</Header.Span>
          </Header.Logo>
        </Header.Title>
      </Header>

      <Details.Wrapper>
        <Details.Heading>
          <Link to='/'>← Back to search</Link>
          <Details.Title>How to apply</Details.Title>
          <Details.Email
            dangerouslySetInnerHTML={{ __html: job?.how_to_apply }}
          />
        </Details.Heading>
        <Details.Description>
          <Details.DescHeading>
            <h1>{job?.title}</h1>
            <Details.Button>{job?.type}</Details.Button>
          </Details.DescHeading>
          <Details.Time>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15ZM8.835 5.25H8.79C8.49 5.25 8.25 5.49 8.25 5.79V9.33C8.25 9.5925 8.385 9.84 8.6175 9.975L11.73 11.8425C11.985 11.9925 12.315 11.9175 12.465 11.6625C12.6225 11.4075 12.54 11.07 12.2775 10.92L9.375 9.195V5.79C9.375 5.49 9.135 5.25 8.835 5.25Z'
                fill='#B7BCCE'></path>
            </svg>
            {/* <time dateTime={job?.created_at}>{formattedDate(job?.created_at)}</time> */}
            <span>{job?.created_at}</span>
          </Details.Time>
          <Details.Company>
            <Details.CompanyLogo src={job?.company_logo} alt={job?.company} />
            <div>
              <Details.CompanyName>{job?.company}</Details.CompanyName>
              <Details.CompanyLocation>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9.5 2C5.36 2 2 5.36 2 9.5C2 13.64 5.36 17 9.5 17C13.64 17 17 13.64 17 9.5C17 5.36 13.64 2 9.5 2ZM8.75 15.4475C5.7875 15.08 3.5 12.56 3.5 9.5C3.5 9.035 3.56 8.5925 3.6575 8.1575L7.25 11.75V12.5C7.25 13.325 7.925 14 8.75 14V15.4475ZM13.925 13.5425C13.73 12.935 13.175 12.5 12.5 12.5H11.75V10.25C11.75 9.8375 11.4125 9.5 11 9.5H6.5V8H8C8.4125 8 8.75 7.6625 8.75 7.25V5.75H10.25C11.075 5.75 11.75 5.075 11.75 4.25V3.9425C13.9475 4.835 15.5 6.9875 15.5 9.5C15.5 11.06 14.9 12.4775 13.925 13.5425Z'
                    fill='#B9BDCF'></path>
                </svg>
                <span>{job?.location}</span>
              </Details.CompanyLocation>
            </div>
          </Details.Company>
          <Details.Explanation
            dangerouslySetInnerHTML={{ __html: job?.description }}
          />
        </Details.Description>
      </Details.Wrapper>
    </Details>
  )
}

export default DetailContainer
