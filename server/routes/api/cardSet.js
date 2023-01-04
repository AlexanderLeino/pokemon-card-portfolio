const router = require("express").Router()
const CardSetController = require('../../controllers/cardSet')

//matches api/card/findCard
router.route('/findCard')
    .post(CardSetController.getAllCardSets)

module.exports = router