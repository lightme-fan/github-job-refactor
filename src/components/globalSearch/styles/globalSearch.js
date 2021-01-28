import styled from 'styled-components'

export const Container = styled.form`
    background-image: url('https://bit.ly/33QVyLX');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 16px;
    background-position: 50%;
    padding: 5rem;
    margin: 3rem 0;
`;

export const Wrapper = styled.fieldset`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    border: none;
    background: #FFFFFF;
    width: 100%;
`;

export const Button = styled.button`
    width: 104px;
    border: none;
    background: #1E86FF;
    border-radius: 4px;
    padding: 18px;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }
`; 