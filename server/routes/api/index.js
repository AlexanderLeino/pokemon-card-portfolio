const router = require("express").Router()
const cardRoutes = require('./card')
const cardSetRoutes = require('./cardSet')

// matches /api/user
// router.route('/user', userRoutes)
  
// matches /api/card
router.use('/card', cardRoutes)

// matches /api/cardSet
router.use('/cardSet', cardSetRoutes)
    


module.exports = router