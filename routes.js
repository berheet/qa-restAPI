'use strict';

var express = require('express');
var router = express.Router();

//get /questions
//return all of the questions
router.get("/", function(req, res){
    res.json({response: "You sent a GET request"});
});

//post /questions
//Route for creating questions
router.post("/", function(req, res){
    res.json({response: "You send a POST request"});
    body: req.body
});

//get /questions/:id
//return specific question 
router.get("/:id", function(req, res){
    res.json({response: "You sent a GET request for a specific ID" + req.params.id});
});

module.exports = router;