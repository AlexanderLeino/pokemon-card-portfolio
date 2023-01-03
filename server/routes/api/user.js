const router = require('express').Router()
const User = require('../../controllers/user.js')

router.route('/')
    .get(User.findUser)

module.exports = router