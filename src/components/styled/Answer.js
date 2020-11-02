import React, { useContext } from 'react';
import { RoundContext } from '../context/ContextsRoundDetails'
import { TriviaContext } from '../context/ContextTrivia'
import Button from './Button'

const Answer = () => {
  const RoundDetails = useContext(RoundContext)
  const { answeredCorrectly} = RoundDetails.state
  const Trivia = useContext(TriviaContext)
  const { correct } = Trivia.state


  const prepareMessage = () => {
    if(answeredCorrectly) {
      return `congratulations! \nThat answer was correct.`
    } else {
      return `Your answer was incorrect. \nThe correct answer was ${correct}. \nBetter luck next time.`
    }
  }


  const nextQuestion = (e) => {
    e.preventDefault()
    RoundDetails.dispatch({type:"NEXT_QUESTION"})
  }

  const message = prepareMessage ()

  return (
    <div>
    {message}
    <Button label="Next Question" handler={nextQuestion} />
    </div>
  )
}

export default Answer