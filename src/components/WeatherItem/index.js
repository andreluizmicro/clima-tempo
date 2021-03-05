import React from 'react';
import { 
    Container,
    WeatherArea,
    WeatherInfo,
    WeatherConditions,
    WheaterDate,
    WheaterText,
    WheaterTemperature,
    WheaterRain,
    WheaterTemperatureMax,
    WheaterTemperatureMin,
    WheaterTemperaturePhoto,
    WheaterRainPhoto,
    WheaterRainProbability,
    WheaterRainPrecipitation,
 } from './styled';

export default ({data}) => {
    return (
        <Container>
            <WeatherArea>
                <WeatherInfo>
                    <WheaterDate>27/01/2017</WheaterDate>
                    <WheaterText>{data['weather'][0]['text']}</WheaterText>
                </WeatherInfo>
                <WeatherConditions>

                    <WheaterTemperature>
                        <WheaterTemperaturePhoto src="/assets/images/icons/upload.png" />
                        <WheaterTemperatureMax>20°C</WheaterTemperatureMax>
                        <WheaterTemperaturePhoto src="/assets/images/icons/download.png"/>
                        <WheaterTemperatureMin>30°C</WheaterTemperatureMin>
                    </WheaterTemperature>

                    <WheaterRain>
                        <WheaterRainPhoto src="/assets/images/icons/raindrop-close-up.png"/>
                        <WheaterRainProbability>70mm</WheaterRainProbability>
                        <WheaterRainPhoto src="/assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" />
                        <WheaterRainPrecipitation>50%</WheaterRainPrecipitation>
                    </WheaterRain>
                    
                </WeatherConditions>
            </WeatherArea>
        </Container>
    );
}
