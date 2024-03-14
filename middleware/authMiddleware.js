const jwt = require('jsonwebtoken');
const secretKey = 'sary'; // Same secret key used for token generation

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    });
};

module.exports = {
    authenticateToken
};