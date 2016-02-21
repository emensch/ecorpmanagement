import express  from 'express';
import artists  from './artists';
import users    from './users';

const router = express.Router();

router.use('/artists', artists);
router.use('/users', users);

export default router;