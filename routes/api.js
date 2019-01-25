const express = require('express');
const router = express.Router()
const POIs = require('../models/POIs')

router.get('/points', function(req, res, next){
    POIs.find({}).then(function(POI){
        res.send(POI)
    })
})

router.get('/points/:id', function(req, res, next){
    POIs.findOne({_id: req.params.id}).then(POI => res.send(POI)
    )

})


router.post('/points', function(req, res, next){
    POIs.create(req.body).then(function(POI){
        res.send(POI)
    }).catch(next)
})


module.exports = router 