export default function(innerHTML) {
    const template = `
        <!DOCTYPE html>
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width' />
                <title> ECorp Management </title>
                <link rel='stylesheet' href='/style.css' />
            </head>
            <body>
                <div id='root'>${innerHTML}</div>
                <script type='application/javascript' src='/bundle.js'></script>
            </body>
        </html>
    `;

    return template;
};