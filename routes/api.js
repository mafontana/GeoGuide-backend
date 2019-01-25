const express = require('express');
const router = express.Router()
const POIs = require('../models/POIs')

router.get('/points', function(req, res, next) {
    res.send({type: 'GET'})
})

router.post('/points', function(req, res, next) {
    POIs.create(req.body).then(function(POI){
        res.send(POI)
    }).catch(next)
})


module.exports = router 