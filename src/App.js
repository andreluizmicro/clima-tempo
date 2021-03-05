import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';
import ReactToolTip from 'react-tooltip';

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import WeatherScreen from './pages/WeatherScreen';

import MenuItem from './components/MenuItem';

export default () => {
    // const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/images/previsao.svg" link="/" title="Previsão do Tempo"/>
                    <MenuItem icon="/assets/images/clima.svg" link="/clima" />
                    <i class="fa fa-user-circle"></i>
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <Route path="/clima">
                            <WeatherScreen/>
                        </Route>
                    </Switch>
                </PageBody>
                <ReactToolTip  id="tip-right" place="right" effect="solid" />
                <ReactToolTip  id="tip-bottom" place="bottom" effect="solid" />
            </Container>
        </BrowserRouter>
    );
}