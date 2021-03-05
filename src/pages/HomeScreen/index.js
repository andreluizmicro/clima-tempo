import React, {useState, useEffect} from 'react';
//import { useHistory } from "react-router-dom";
import { 
    Container, 
    HeaderTitle,
    WeatherArea,
    WeatherList, 
} from './styled';

import api from '../../api'

import Header from '../../components/Header';
import WeatherItem from '../../components/WeatherItem';

let searchTimer = null;

export default () => {
    //const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [weathers, setWeathers] = useState([]);

    const [activeSearch, setActiveSearch] = useState('');   
    
    const getWeathers = async () => {
        const weathersAll = await api.getWeathers(activeSearch);
        if(weathersAll.error === '') {
            setWeathers(weathersAll.result);
        }
    }

    useEffect(()=> {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch]);

    useEffect(()=>{
        setWeathers([]);
        getWeathers();
    }, [activeSearch]);
    
    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            <HeaderTitle>Previsão para </HeaderTitle>    

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