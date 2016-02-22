import express      from 'express';
import bodyParser   from 'body-parser'
import artists      from './artists';
import users        from './users';
import verifyAuth   from '../utils/auth';

const router = express.Router();

router.use(bodyParser.json());

router.get('/testauth', verifyAuth, (req, res) => {
    res.send('Hello, Mr. Anderson' + req.user);
});

router.use('/artists', artists);
router.use('/users', users);

export default router;