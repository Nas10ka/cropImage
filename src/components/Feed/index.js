import React, { Component } from 'react';
import Styles from './styles';
// import { v4 } from 'uuid';
import { Link, Switch, Route } from  'react-router-dom';
import Header from '../Header';
import Main from '../Main';

// INSTRUMENTS
// import {
//     CSSTransition,
//     Transition,
//     TransitionGroup
// } from 'react-transition-group';
// import { fromTo } from 'gsap';
// import Styles from './styles';

// COMPONENTS


export default class Feed extends Component {


    render () {

        return (
            <div className = { Styles.feed }>
                <Header />
                <Main />
                Hello, world!
            </div>
        );
    }
}
