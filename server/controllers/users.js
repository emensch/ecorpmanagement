import express  from 'express';

import User     from '../models/user';

const router = express.Router();

router.get('/', (req, res, next) => {
    User.getAll()
        .then( (result) => {
            res.json(result);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    User.create(req.body)
        .then( (result) => {
            res.json(result);
        }) 
        .catch(next);
});

router.delete('/:username', (req, res, next) => {
    User.delete(req.params.username)
        .then( (result) => {
            res.json(result);
        })
        .catch(next); 
});

router.post('/authenticate', (req, res, next) => {
    User.getToken(req.body)
        .then( (result) => {
            res.json(result);
        }) 
        .catch(next);
});

export default router;