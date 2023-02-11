const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
  res.send('this is in the users controller')
})

module.exports = router