const router = require('express').Router()
const User = require('../../controllers/user.js')
const Card = require('../../controllers/card.js')

router.route('/')
    .get(User.findUser)
// matches /api/card
router.route('/card')
    .post(Card.findCard)

module.exports = router