// JavaScript Document
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState:function(){

		return{
			inputValue:'',
			textareaValue: ''
		}
	},
	handleForm:function(e){
		e.preventDefault();
		//console.log(this.refs.title.value);
		//console.log(this.refs.description.value);
		if(!this.state.inputValue) return;
		var newQuestion = {
			title: this.state.inputValue,
			description: this.state.textareaValue,
			voteCount: 0,
		};
		this.setState({
			inputValue:'',
			textareaValue: ''
		})
		this.props.onNewQuestion(newQuestion);
	},
	handleInput:function(e){
		this.setState({

			inputValue:e.target.value
		})
	},
	handleTextarea:function(e){
		this.setState({

			textareaValue:e.target.value
		})
	},
	render:function(){
		var styleObj = {
				display: this.props.formDisplayed ? "block" : "none"	
		};
		return(	
			<form name="addQuestion" className="clearfix" style={styleObj} onSubmit={this.handleForm}>
				<div className="form-group">
					<label htmlFor="qtitle">问题</label>
					<input value={this.state.inputValue} onChange={this.handleInput} type="text" className="form-control" id="qtitle" placeholder="您的问题是。。"/>
				</div>
				<textarea  value={this.state.textareaValue} onChange={this.handleTextarea}  className="form-control" rows="3" placeholder="问题的描述"></textarea>
				<button className="btn btn-success pull-right">确认</button>
				<a className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</a>
			</form>
		);	
	}
});