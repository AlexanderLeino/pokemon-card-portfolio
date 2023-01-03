const router = require('express').Router();
const routes = require('./api/user.js')

router.use('/api', routes);

module.exports = router;