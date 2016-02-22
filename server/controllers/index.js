import express      from 'express';
import bodyParser   from 'body-parser'
import artists      from './artists';
import users        from './users';
import verifyAuth   from '../utils/auth';
import errorHandler from '../utils/errors';

const router = express.Router();

router.use(bodyParser.json());

router.get('/testauth', verifyAuth, (req, res) => {
    res.json(req.user);
});

router.use('/artists', artists);
router.use('/users', users);

router.use(errorHandler);

export default router;