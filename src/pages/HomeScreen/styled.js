import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const HeaderTitle = styled.h1`
    color: #000;
    text-align: center;
    font-weight: 200;
`

export const LocalArea = styled.div``;

export const LocalList = styled.div``;

export const WeatherArea = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const WeatherList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`;