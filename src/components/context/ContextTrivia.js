import React, { createContext, useReducer } from 'react';
import Questions from '../../data/questions'

const TriviaState = {
  correct: '',
  incorrect: ['', '', ''],
  question: '',
}

const retrieveQuestion = (index) => {
  let trivia = Questions[index]
  return {
    correct: trivia.correct,
    incorrect: trivia.incorrect,
    question: trivia.question,
  }
}


const TriviaReducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUESTION':
      let newState = retrieveQuestion(action.indexNumber)
      return {...state, ...newState}
    default:
      return state
  }
}

export const TriviaContext = createContext(TriviaState)

export const TriviaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TriviaReducer, TriviaState)
  return (
    <TriviaContext.Provider value={{ state, dispatch }}>
      {children}
    </TriviaContext.Provider>
  )
}


