const express = require('express');
const Yz = require('../models/db');
const router = express.Router();

router.get('/yz', (req, res) => {
    // 寻找 最靠近的Geo
    Yz.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        // sphere是 true
        spherical: true,
        distanceField: "dist.calculated"
    }).then(function(yz){
        res.send(yz);
    })
})

router.post('/yz', (req, res, next) => {
    // const yz = new Yz(req.body);
    // yz.save();
    /*
    *  create 后直接在YZ里面save了 
    */ 
    Yz.create(req.body)
      .then( yz => { 
        res.send(yz)
    }).catch(next);
})

router.put('/yz/:id', (req, res) => {
    Yz.findByIdAndUpdate({_id: req.params.id}, req.body)
      .then(function(){
          Yz.findOne({_id: req.params.id})
        .then(function(yz){
            res.send(yz)
        })
    })
})

router.delete('/yz/:id', (req, res) => {
    Yz.findByIdAndRemove({_id: req.params.id})
      .then(function(yz){
          res.send(yz)
      });
})

module.exports = router;