'use strict'
let express = require('express');
let router = express.Router();
let brainStorm = require('../BrainStorm');


	router.get('/', (req, res, next) => {
		let allTheQuestions = brainStorm.Questionlist();
		res.send(allTheQuestions);
	})

	router.get('/:questionID', (req, res, next) => {
		let singleQuestion = brainStorm.singleQuestion(req.params.questionID);
		res.send(singleQuestion);
	})

	router.post('/', (req, res, next) => {
		let newQuestion = brainStorm.addQuestion(req.body.question)
		res.send(newQuestion);
	})

	router.delete('/:questionID', (req,res,next) => {
		brainStorm.deleteQuestion(req.body.questionID)
		res.send(204);
		added
	})

