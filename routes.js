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
    res.json({response: "You send a POST request",
    body: req.body
})
});

//get /questions/:id
//return specific question 
router.get("/:qID", function(req, res){
    res.json({response: "You sent a GET request for a specific ID" + req.params.qID});
});

//post /questions/:id/answers
//Route for creating answers
router.post("/:qID/answers", function(req, res){
    res.json({response: "You send a POST request to /answers",
    questionID: req.params.qID,
    body: req.body
})
});

//put /questions/:qID/answers/aID
//Route for editing an answer
router.put("/:qID/answers/:aID", function(req, res){
    res.json({response: "You send a PUT /answers",
    questionID: req.params.qID,
    answerID: req.params.aID,
    body: req.body
})
});

//Delete /questions/:qID/answers/aID
//Route for deleteing an answer
router.delete("/:qID/answers/:aID", function(req, res){
    res.json({response: "You send a delete /answers",
    questionID: req.params.qID,
    answerID: req.params.aID,
})
});

//POST /questions/:qID/answers/aID/vote-up
//POST /questions/:qID/answers/aID/vote-down
//Route for voting on an answer
router.delete("/:qID/answers/:aID/vote-:dir", function(req, res){
    res.json({response: "You send a POST /vote-" + req.params.dir,
    questionID: req.params.qID,
    answerID: req.params.aID,
    vote: req.params.dir
})
});
module.exports = router;