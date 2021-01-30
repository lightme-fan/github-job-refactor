import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Details, Header } from '../components'
import { GlobalContext } from '../context/ContextProvider'

function DetailContainer() {
    const { id } = useParams()
    const { jobs, dispatch } = useContext(GlobalContext)

    const job = jobs.find(item => item.id === id)
    console.log(job);

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
                    <Link to="/">← Back to search</Link>
                    <Details.Title>How to apply</Details.Title>
                    <Details.Email dangerouslySetInnerHTML={{__html:job?.how_to_apply}} />
                </Details.Heading>
                <Details.Description>
                    <Details.DescHeading>
                        <h1>{job?.title}</h1>
                        <Details.Button>{job?.type}</Details.Button>
                    </Details.DescHeading>
                    <Details.Time>5 days ago</Details.Time>
                    <Details.Company>
                        <Details.CompanyLogo src={job?.company_logo} alt={job?.company}/>
                        <div>
                            <Details.CompanyName>{job?.company}</Details.CompanyName>
                            <Details.CompanyLocation>{job?.location}</Details.CompanyLocation>
                        </div>
                    </Details.Company>
                    <Details.Explanation dangerouslySetInnerHTML={{__html:job?.description}} />
                </Details.Description>
            </Details.Wrapper>
        </Details>
    )
}

// company: "BRANDIRON"
// company_logo: null
// company_url: "http://WWW.BRANDIRON.NET"
// created_at: "Fri Jan 29 18:49:45 UTC 2021"
// description: "<p>We are looking for a freelance front end web developer with an eye for SEO and all things speed. You have at least 3 years of front end web development experience and you like solving complex problems.</p>↵<p>RESPONSIBILITIES:</p>↵<p>Code websites using HTML, CSS and JavaScript within a mainstream CMS↵Independently and accurately scope and manage project budgets and timelines↵Participate in early stage concept development, content architecture, and functionality designs in the web development process↵Ability to setup domain, manage DNS zone records, through development and website launch↵Manage multiple projects by working directly with both designers and project managers within a flexible, changing environment↵Effectively problem-solve and resolve website issues↵Effectively respond to client inquiries regarding their websites↵Train new clients on their website while customizing the solution to their business</p>↵<p>REQUIREMENTS:</p>↵<p>3+ years programming and UX Design experience↵Proven experience with CMS (able to show examples)↵Expert in HTML and CSS, and comfortable with PHP↵Extensive experience developing custom theming and templating within a mainstream CMS (WordPress)↵Expert knowledge of JavaScript and advanced knowledge of implementing behavior and functionality with JQuery↵Ability to employ an efficient development workflow to take project from inception to launch↵Experience with Google Analytics and integration in the backend of the website↵Familiarity with SEO best practices and standards↵Experience working with and creating SVG images↵Experience managing data that requires multiple content types, categories, taxonomies, and relationships↵Comfortable working with XD and Adobe Creative Suite↵Google Adwords experience</p>↵"
// how_to_apply: "<p>Email your resume to <a href="mailto:cbarker@brandiron.net">cbarker@brandiron.net</a></p>↵"
// id: "26982bd3-6111-4929-9e5d-8979332722ca"
// location: "Remote/CO"
// title: "Front End Web Development"
// type: "Contract"
// url: "https://jobs.github.com/positions/26982bd3-6111-4929-9e5d-8979332722ca"
export default DetailContainer
