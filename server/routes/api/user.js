const router = require("express").Router()
const UserController = require('../../controllers/user')

//matches api/user/createUser
router.route('/createUser')
    .post(UserController.createUser)

module.exports = router