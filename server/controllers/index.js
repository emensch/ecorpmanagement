import express      from 'express';
import bodyParser   from 'body-parser'
import artists      from './artists';
import users        from './users';

const router = express.Router();

router.use(bodyParser.json());

router.use('/artists', artists);
router.use('/users', users);

export default router;