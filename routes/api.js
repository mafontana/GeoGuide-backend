const express = require('express');
const router = express.Router()

router.get('/points', function(req, res) {
    res.send({type: 'GET'})
})

module.exports = router 