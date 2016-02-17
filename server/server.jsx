import express                  from 'express';
import React                    from 'react';
import { renderToString, 
         renderToStaticMarkup } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes                   from '../shared/routes';
import template                 from './template'

const app = express();

let dev = (process.env.NODE_ENV !== 'production');

if(dev) {
    require('../webpack/webpack.dev').default(app);
}

app.use(express.static('dist'));

app.use( (req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }

        if(!renderProps) {
            return res.sendStatus(404);
        }

        const componentHTML = renderToString(<RouterContext {...renderProps} />);
        const HTML = template(componentHTML, dev);

        res.send(HTML);
    });
});

export default app;