import jwt  from 'express-jwt';

const config = {
    secret: process.env.JWT_SECRET
}

export default jwt(config);