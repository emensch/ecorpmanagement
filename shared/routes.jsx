import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './components/index'

export default (
    <Route name='app' path='/' component={App}>
        <IndexRoute />
    </Route>
);