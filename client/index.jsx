import React                        from 'react';
import { render }                   from 'react-dom';
import { Router, browserHistory }   from 'react-router';
import { Provider }                 from 'react-redux';
import configureStore               from '../shared/store/configureStore';

import routes                       from '../shared/routes';

import './stylesheets/main.scss';
import './images/logo.png';
import './images/logo_small.png';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render(
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);