export default function(innerHTML, dev) {
    const stylesheet = !dev ? '<link rel=\'stylesheet\' href=\'/style.css\' />' : ' ';

    const template = `
        <!DOCTYPE html>
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width' />
                <title> ECorp Management </title>
                ${stylesheet}
            </head>
            <body>
                <div id='root'>${innerHTML}</div>
                <script type='application/javascript' src='/bundle.js'></script>
            </body>
        </html>
    `;

    return template;
};