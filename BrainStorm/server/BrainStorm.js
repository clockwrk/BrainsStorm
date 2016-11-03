'use strict'

let _ = require('lodash');
let Questions = [];
let Answers = [];
let Users = [];
let Votes = [];


let question = (text, time) => {
	let question = {};
		question.text = text;
		question.answers = [];
		question.time = time;

		this.prototype.WinningAnswer = () => {

		}

		this.prototype.WinningUser = () => {

		}

	return question;
}

let answer = (questionID, possibleAnswer) => {
	let answer = {};
		answer.questionID = questionID;
		answer.text = possibleAnswer;
		answer.score = 0;
		answer.againstVotes = [];
		answer.forVotes = []

	return answer; 
}

let user = () => {

	let user = {}
		user.answers = [];
		user.score = 0;
	return user
}

let vote = (questionID, answerID, userID, type) => {
	let vote = {}
		vote.questionID = questionID;
		vote.answerID = answerID;
		vote.userID = userID;
		vote.type = type;


	return vote;
}



function addQuestion (questionText) => {
	let questionSubmit = new question(questionText);
	Questions.push(questionSubmit);
	return _.clone(Questions[Questions.length - 1]);
}

function AnswerAQuestion (questionID, answer) => {
	let submitAnAnswer = new answer(questionID, answer);
	Answers.push(submitAnAnswer)
}

function voteOnAnAnswer (questionID, answerID, userID, type) => {
	let castVote = new vote(questionID, answerID, userID, type)
	Votes.push(castVote)
}

function singleQuestion(questionID){
	return Questions[questionID];
}



let brainStorm = () => {

	this.prototype.questionslist : () => {



	}







}



module.export = branStorm;