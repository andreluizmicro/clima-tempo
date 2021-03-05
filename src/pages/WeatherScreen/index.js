import React, {useState, useEffect} from 'react';
//import { useHistory } from "react-router-dom";
import { 
    Container, 
    //LocalArea, 
    //LocalList, 
    WeatherArea,
    WeatherList, 
} from './styled';

import api from '../../api'

import Header from '../../components/Header';
// import LocalItem from '../../components/LocalItem';
import WeatherItem from '../../components/WeatherItem';

export default () => {
    //const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    //const [locales, setLocales] = useState([]);
    const [weathers, setWeathers] = useState([]);
    
    const getWeathers = async () => {
        const weathersAll = await api.getWeathers();
        if(weathersAll.error === '') {
            setWeathers(weathersAll.result);
        }
    }

    useEffect(()=>{
        // const getLocales = async() => {
        //     const loc =  await api.getLocales();
        //     if(loc.error === '') {
        //         setLocales(loc.result);
        //     }
        // };
        //getLocales();
        getWeathers();
    }, []);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            
            {/* {locales.length > 0 &&
                <LocalArea>
                    Selecione um local
                    <LocalList>
                        <LocalItem />
                    </LocalList>
                </LocalArea>    
            } */}
            {weathers.length &&
                <WeatherArea>
                    <WeatherList>
                        {weathers.map((item, index)=>(
                            <WeatherItem 
                                key={index}
                                data={item}
                            />
                        ))}
                        
                    </WeatherList>
                </WeatherArea>
            }
            </Container>
    );
}