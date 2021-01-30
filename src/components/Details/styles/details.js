import styled from 'styled-components'

export const Container = styled.article``;

export const Wrapper = styled.div`
    margin-top: 34px;
    margin-bottom: 34px;

    a {
        color: #1E86FF;
    }

    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 30% 1fr;
        gap: 10%;
        /* justify-content: space-between; */
    }
`;

export const Heading = styled.div``;
export const BackHome = styled.a``;

export const Title = styled.h1`
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #B9BDCF;
    padding: 1rem 0;
`;

export const Email = styled.p`
    padding-bottom: 1rem;
`;
export const Description = styled.div``;

export const DescHeading = styled.div`
    h1 {
        font-size: 24px;
        line-height: 28px;
        color: #334680;
        margin: 0;
    }

    @media (min-width: 900px) {
        display: flex;
        gap: 2rem;
    }
`;
export const Button = styled.button`
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: transparent;
    padding: 8px;
`;

export const Time = styled.p`
    font-size: 12px;
    line-height: 14px;
    color: #B7BCCE;
    margin: 0;
    padding: 10px;
`;

export const Company = styled.div`
    margin: 35px 0;
    display: flex;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const CompanyLogo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 4px;
`;
export const CompanyName = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
`;

export const CompanyLocation = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 14px;
    color: #B9BDCF;
`;

export const Explanation = styled.div``;