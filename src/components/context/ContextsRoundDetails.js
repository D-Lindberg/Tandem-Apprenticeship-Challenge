import React, { createContext, useReducer } from 'react';


const RoundState = {
  questionNumber: 0,
  questionIndex: [],
  display: -1,
  attempted: 0,
  correct: 0,
  answeredCorrectly: false,
  gameFinished: false,
}

const randomQuestionIndexGenerator = (totalQuestions, roundLength) => {
  let questionIndex = []
  let index = Math.floor(Math.random() * totalQuestions)
  while (questionIndex.length < roundLength) {
    while (questionIndex.includes(index)) {
      index = Math.floor(Math.random() * totalQuestions)
    }
    questionIndex.push(index)
  }
  return questionIndex
}

const beginGame = () => {
  let questionIndex = randomQuestionIndexGenerator(21, 10)
  let data = { ...RoundState, questionIndex: questionIndex, questionNumber: 1, display: 0 }
  return data
}

const correctAnswer = (trivia) => {
  let newTrivia = { ...trivia }
  newTrivia.correct += 1
  newTrivia.answeredCorrectly = true
  newTrivia.attempted += 1
  newTrivia.display = 1
  return newTrivia
}

const wrongAnswer = (trivia) => {
  let newTrivia = { ...trivia }
  newTrivia.attempted += 1
  newTrivia.display = 1
  return newTrivia
}

const nextQuestion = (trivia) => {
  let question = trivia.questionNumber
  question += 1
  if (question > 10) return { ...RoundState, gameFinished: true }
  let newTrivia = { ...trivia, display: 0, questionNumber: question, answeredCorrectly: false }
  return newTrivia
}

const RoundReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      let newState_01 = beginGame()
      return { ...state, ...newState_01 }
    case 'CORRECT_ANSWER':
      let newState_04 = correctAnswer(state)
      return { ...state, ...newState_04 }
    case 'WRONG_ANSWER':
      let newState_05 = wrongAnswer(state)
      return { ...state, ...newState_05 }
    case 'NEXT_QUESTION':
      let newState_06 = nextQuestion(state)
      return { ...state, ...newState_06 }
    default:
      return state
  }
}

export const RoundContext = createContext(RoundState)

export const RoundContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RoundReducer, RoundState)
  return (
    <RoundContext.Provider value={{ state, dispatch }}>
      {children}
    </RoundContext.Provider>
  )
}
