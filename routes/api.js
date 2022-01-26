const express = require('express');
const user_movies = require('../models/user_movies.js')
const router = express.Router();

router.get('/user_movies',function(req, res, next){
    user_movies.find({}).then(function(users) {
        res.send(users);
    }).catch(next);
});

router.post('/user_movies', function(req, res, next){
    user_movies.create(req.body).then(function(user) {
        res.send(user);
    }).catch(next);
});

router.put('/user_movies/:user_id', function(req, res, next){
    user_movies.findOneAndUpdate({user_id: req.params.user_id}, req.body).then(function(oldUser) {
        user_movies.findOne({user_id: req.params.user_id}).then(function(user) {
            res.send(user);
        }).catch(next);
    }).catch(next);
});
router.delete('/user_movies/:user_id', function(req, res, next){
    user_movies.findOneAndDelete({user_id: req.params.user_id}).then(function(user) {
        res.send(user);
    }).catch(next);
});


module.exports = router;