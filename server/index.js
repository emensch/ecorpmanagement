import config from '../env.config.js';
import server from './server';

const PORT = process.env.PORT || 1337;

server.listen(PORT, () => {
    console.log('Server listening on: ' + PORT);
});