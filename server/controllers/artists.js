import express  from 'express';

import Artist   from '../models/artist';

const router = express.Router();

router.get('/', (req, res, next) => {
    Artist.getAll()
        .then( (result) => {
            res.json(result);
        })
        .catch(next);
});

router.get('/:slug', (req, res, next) => {
    Artist.getOne(req.params.slug)
        .then( (result) => {
            res.json(result);
        }) 
        .catch(next);
});

router.post('/', (req, res, next) => {
    Artist.create(req.body)
        .then( (result) => {
            res.json(result);
        }) 
        .catch(next);
});

router.put('/:slug', (req, res, next) => {
    Artist.update(req.params.slug, req.body)
        .then( (result) => {
            res.json(result);
        })
        .catch(next);
});

router.delete('/:slug', (req, res, next) => {
    Artist.remove(req.params.slug)
        .then( (result) => {
            res.json(result);
        })
        .catch(next);    
});

export default router;