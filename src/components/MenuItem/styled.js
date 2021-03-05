import styled from 'styled-components';

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: ${props=>props.active ? '#0267a3' : ''};
`;

export const LinkIcon = styled.img`
    width: 50px;
    height: auto;
`;
