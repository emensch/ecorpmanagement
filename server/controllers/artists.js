import express  from 'express';

import Artist   from '../models/artist';

const router = express.Router();

router.get('/', (req, res) => {
    Artist.getAll(req.query.filter)
        .then( (result) => {
            res.json(result);
        })
        .catch( (error) => {
            res.json(error);
        });
});

router.get('/:slug', (req, res) => {
    Artist.get(req.params.slug)
        .then( (result) => {
            res.json(result);
        }) 
        .catch( (error) => {
            res.json(error);
        });
});

router.post('/', (req, res) => {
    Artist.create(req.body)
        .then( (result) => {
            res.json(result);
        }) 
        .catch( (error) => {
            res.json(error);
        });
});

router.put('/:slug', (req, res) => {
    Artist.update(req.params.slug, req.body)
        .then( (result) => {
            res.json(result);
        })
        .catch( (error) => {
            res.json(error);
        });
});

router.delete('/:slug', (req, res) => {
    Artist.delete(req.params.slug)
        .then( (result) => {
            res.json(result);
        })
        .catch( (error) => {
            res.json(error);
        });    
});

export default router;