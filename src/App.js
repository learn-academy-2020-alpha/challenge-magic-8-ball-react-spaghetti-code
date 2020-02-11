import React from 'react';
import './App.css';
var shake = ["", "shaking"]
var i = 0
var myVar
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["It is certain", "It is decidedely so", "Without a dobut", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    const { question } = this.state
    if (question.charAt(question.length-1) === "?"){
        let ourAnswer = answerArray[(Math.floor(Math.random()* answerArray.length))]
        return ourAnswer
    } else {
        return "Please ask a question"
    }
    // write your code here
    // Update the return statement below to reflect the outcome of your code.
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
    i = 1

  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p class = "answer"> { this.state.answer } </p>
        <img id = {shake[i]} src={require("./8ball-pixilart.png")} width="50%" height="50%" alt="8 ball image"></img>

      </div>
    )
  }
}

export default App;
