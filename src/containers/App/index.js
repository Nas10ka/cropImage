// Core
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
// Instruments
import Feed from '../../components/Feed';
import Catcher from '../../components/Catcher';

export default class App extends Component {
    render () {
        return (
            <BrowserRouter>
            <Catcher>
                <Feed />
            </Catcher>
            </BrowserRouter>
        );
    }
}
