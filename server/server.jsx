import express                  from 'express';
import React                    from 'react';
import { renderToString, 
         renderToStaticMarkup } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes                   from '../shared/routes';
import path                     from 'path';

const app = express();

if(process.env.NODE_ENV !== 'production') {
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

        function getInnerHTML() {
            const componentHTML = renderToString(<RouterContext {...renderProps} />);
            return { __html: componentHTML };
        }

        const HTML = renderToStaticMarkup(
            <html lang='en'>
                <head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width' />
                    <title> ECorp Management </title>
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    <div
                        id='root'
                        dangerouslySetInnerHTML={getInnerHTML()}
                    />
                    <script type='application/javascript' src='/bundle.js' />
                </body>
            </html>
        );

        res.send('<!DOCTYPE html' + HTML);
    });
});

export default app;