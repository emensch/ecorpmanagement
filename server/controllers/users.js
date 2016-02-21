import express  from 'express';

import User     from '../models/user';

const router = express.Router();

router.get('/', (req, res) => {
    User.getAll()
        .then( (result) => {
            res.json(result);
        })
        .catch( (error) => {
            res.json(error);
        });
});

router.post('/', (req, res) => {
    User.create(req.body)
        .then( (result) => {
            res.json(result);
        }) 
        .catch( (error) => {
            res.json(error);
        });
});

router.delete('/:username', (req, res) => {
    User.delete(req.params.username)
        .then( (result) => {
            res.json(result);
        })
        .catch( (error) => {
            res.json(error);
        }); 
});

router.post('/authenticate', (req, res) => {
    User.getToken(req.body)
        .then( (result) => {
            res.json(result);
        }) 
        .catch( (error) => {
            console.log(error);
            res.json(error);
        });
});

export default router;