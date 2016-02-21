import express  from 'express';

import User     from '../models/user';

const router = express.Router();

router.get('/', (req, res) => {
    // get all users
});

router.get('/:slug', (req, res) => {
    // get one user
});

router.post('/', (req, res) => {
    // create a user
});

router.delete('/:username', (req, res) => {
    // delete a user
});

export default router;