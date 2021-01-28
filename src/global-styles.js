import styled from 'styled-components'

export const MainContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 1rem;
`;

export const Wrapper = styled.div`
    @media (min-width: 900px) {
        display: flex;
        justify-content: space-between;
        gap: 10%;
    }
`;

export const Search = styled.div`
    @media (min-width: 900px) {
        width: 70%;
    }
`;