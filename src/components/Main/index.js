import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Crop from '../Crop';
import Slider from '../Slider';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Crop} />
            <Route exact path="/slider" component={Slider} />
        </Switch>
    </main>
);

export default Main;