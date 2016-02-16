import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './components/index';
import Home                     from './components/Home';
import Artist                   from './components/Artist';
import Contact                  from './components/Contact';

export default (
    <Route name='app' path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='artist/:slug' component={Artist} />
        <Route path='contact' component={Contact} />
    </Route>
);