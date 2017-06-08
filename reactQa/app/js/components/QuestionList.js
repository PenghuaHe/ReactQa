// JavaScript Document
var React = require('react');
var QuestionItem = require('./QuestionItem.js');

module.exports = React.createClass({
	render:function(){
		var questions = this.props.questions;
		var onVoteCount = this.props.onVoteCount;
		if(!Array.isArray(questions)) return false;
		
		var questionComps = questions.map(function(qst){
			return <QuestionItem key={qst.key}
			questionKey={qst.key}
			onVoteCount={onVoteCount}
			title={qst.title}
			desc={qst.description}
			voteCount={qst.voteCount}/>
		});
		return(
			<div id="questions" className="">
				{questionComps}	
			</div>
		);	
	}
});