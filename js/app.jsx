import React from 'react';
import ReactDOM from 'react-dom';
import Template from './Components/Template.jsx';
import Main from './Components/Main.jsx';
import Projects from './Components/projects.jsx';
import { Router, Route, IndexLink, IndexRoute, hashHistory } from 'react-router'
import '../scss/styles.scss'



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Template}>
                <IndexRoute component={Main} />
                <Route path="/projects" component={Projects} />
            </Route>
        </Router>,
        document.getElementById('app')
    )
});
