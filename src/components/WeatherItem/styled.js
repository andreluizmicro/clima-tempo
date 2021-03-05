import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3ba4e2;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
    padding: 5px;
    display:flex;
    align-items: center;
`;

export const WeatherArea = styled.div`
    width: 100%;        
`;

export const WeatherInfo = styled.div`
    background-color: #fff;
    padding: 10px;
    
`;

export const WheaterDate = styled.h3`
    font-size: 20px;
    font-weight: 200;
`;

export const WheaterText = styled.p``;

export const WeatherConditions =styled.div`
    background-color: #eeeeee;
    padding: 10px;
`;

export const WheaterTemperature = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin-bottom: 15px;
`;

export const WheaterRain = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin-bottom: 15px;
`;

export const WheaterTemperaturePhoto = styled.img``;

export const WheaterRainPhoto = styled.img``;

export const WheaterRainProbability = styled.div`
    font-size: 30px;
`;

export const WheaterRainPrecipitation = styled.div`
    font-size: 30px;
`;

export const WheaterTemperatureMax = styled.div`
    font-size: 30px;
    color: #0277bd;
`;

export const WheaterTemperatureMin = styled.div`
    font-size: 30px;
    color: #c62828;
`;



