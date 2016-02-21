import express  from 'express';

import Artist   from '../models/artist';

const router = express.Router();

router.get('/', (req, res) => {
    // get all artists
});

router.get('/:slug', (req, res) => {
    // get one artist
});

router.get('/names', (req, res) => {
    // get (only) names of all artists 
});

router.post('/', (req, res) => {
    // create an artist
});

router.put('/:slug', (req, res) => {
    // update an artist
});

router.delete('/:slug', (req, res) => {
    // delete an artist
});

export default router;