import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

import { HashRouter, Route, Switch } from 'react-router-dom';
import KnowUs from './Components/KnowUs';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/know-us' component={KnowUs} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
