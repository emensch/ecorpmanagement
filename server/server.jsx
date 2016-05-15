import express                  from 'express';
import React                    from 'react';
import { renderToString, 
         renderToStaticMarkup } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { createStore,
         applyMiddleware }      from 'redux';
import { Provider }             from 'react-redux';
import thunk                    from 'redux-thunk';
import rootReducer              from '../shared/reducers';
import routes                   from '../shared/routes';
import apiRoutes                from './controllers';
import jade                     from 'jade';

const app = express();

const template = jade.compileFile('server/template.jade');

const dev = (process.env.NODE_ENV !== 'production');

if(dev) {
    require('../webpack/webpack.dev').default(app);
}

app.use(express.static('dist'));
app.use('/api', apiRoutes);

app.use( (req, res) => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }

        if(!renderProps) {
            return res.sendStatus(404);
        }

        const componentHTML = renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );
        const HTML = template({
            innerHTML: componentHTML, 
            dev: dev
        });

        res.send(HTML);
    });
});

export default app;