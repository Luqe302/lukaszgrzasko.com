import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Template from './Components/Template.jsx';
import Main from './Components/Main.jsx';
import Sitonchair from './Components/Sitonchair.jsx';
import Nasaapi from './Components/Nasaapi.jsx';
import Furrygame from './Components/Furrygame.jsx';
import { Router, Route, IndexLink, IndexRoute, hashHistory } from 'react-router'
import '../scss/styles.scss'



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
            <Route path="/" component={Template}>
                <IndexRoute component={Main} />
                <Route path="/sitonchair" component={Sitonchair} />
                <Route path="/nasaapichallenge" component={Nasaapi} />
                <Route path="/furrygame" component={Furrygame} />
            </Route>
        </Router>,
        document.getElementById('app')
    )
});
