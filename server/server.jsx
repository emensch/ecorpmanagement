import express                  from 'express';
import React                    from 'react';
import { renderToString, 
         renderToStaticMarkup } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider }             from 'react-redux';
import configureStore           from '../shared/store/configureStore';
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
    const store = configureStore();

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

        const initialState = store.getState();

        const HTML = template({
            innerHTML: componentHTML,
            initialState: JSON.stringify(initialState),
            dev: dev
        });

        res.send(HTML);
    });
});

export default app;