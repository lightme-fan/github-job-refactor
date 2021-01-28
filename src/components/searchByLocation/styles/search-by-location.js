import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 34px;
`;

export const Title = styled.h2`
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #B9BDCF;
`;

export const Input = styled.input`
    width: 90%;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 25px;
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        margin-right: 4%;
    }
`;