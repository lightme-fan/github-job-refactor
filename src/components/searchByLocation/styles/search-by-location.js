import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 34px;
    position: relative;

    svg {
        position: absolute;
        top: 20%;
        left: 3%;
    }

    label {
        cursor: pointer;
    }
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
    padding: 1rem 0;
    margin-bottom: 25px;
    padding-left: 3rem;
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;

    input {
        margin-right: 4%;
        border-radius: 50%;
    }

    input[type="checkbox"] {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
    }
`;