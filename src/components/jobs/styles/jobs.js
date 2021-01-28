import styled from 'styled-components'

export const Container = styled.nav`
    margin-top: 23px;
    margin-bottom: 23px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    display: flex;
    gap: 1rem;
    background: #FFFFFF;
    padding: 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
`;

export const Image = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 4px;
`;

export const Wrapper = styled.div``;

export const Owner = styled.h3`
    margin: 0;
    font-size: 12px;
    line-height: 14px;
`;

export const Name = styled.p`
    font-size: 16px;
    line-height: 19px;
    color: #334680;
    font-weight: 500;
`;

export const Type = styled.button`
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    background: inherit;
`;

export const More = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 1rem;
`;

export const Location = styled.span`
    font-size: 12px;
    line-height: 14px;
    color: #B9BDCF;
`;

export const Time = styled.span`
    font-size: 12px;
    line-height: 14px;
    color: #B9BDCF;
`;
