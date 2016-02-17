import React                        from 'react';
import { render }                   from 'react-dom';
import { Router, browserHistory }   from 'react-router';

import routes                       from '../shared/routes';

import './stylesheets/main.scss';
import './images/logo.png';
import './images/logo_small.png';

render(
    <Router children={routes} history={browserHistory} />,
    document.getElementById('root')
);