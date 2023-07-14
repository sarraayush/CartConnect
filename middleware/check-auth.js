// const User = require('./models/user');
const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'your-secret-key');
      req.userData = decodedToken;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
  };

  exports.checkAdminAccess = (req, res, next) => {
    if (req.userData && req.userData.isAdmin) {
      next();
    } else {
      return res.status(403).json({ error: 'Access denied' });
    }
  };