import React, { useContext, useEffect } from 'react';
import { RoundContext } from '../context/ContextsRoundDetails'
import { TriviaContext } from '../context/ContextTrivia'
import QuestionForm from './QuestionForm'

const Question = () => {
  const RoundDetails = useContext(RoundContext)
  const { display, questionNumber, questionIndex } = RoundDetails.state
  const Trivia = useContext(TriviaContext)
  const { question, correct, incorrect } = Trivia.state


  useEffect(() => {
    Trivia.dispatch({type:"GET_QUESTION", indexNumber: questionIndex[(questionNumber -1)]})
  },[display])


  const prepareAnswers = () => {
    let answers = []
    answers.push(correct)
    for (let i = 0; i <incorrect.length; i++) {
      answers.push(incorrect[i])
    }
    let sortedAnswers = answers.sort()
    return sortedAnswers
  }

  const answers = prepareAnswers()

  const checkSubmission = (value) => {
    if (value === correct) {
      RoundDetails.dispatch({type:"CORRECT_ANSWER"})
    } else {
      RoundDetails.dispatch({type:"WRONG_ANSWER"})
    }
  }

  return (
    <QuestionForm 
    questionNumber={questionNumber} 
    question={question}
    answers = {answers}
    handler ={checkSubmission}
    />
  )
}

export default Question