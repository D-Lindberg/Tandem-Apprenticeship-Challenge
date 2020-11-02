import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'


const QuestionForm = ({questionNumber, question, answers, handler}) => {

  const handleClick = (e) => {
    e.preventDefault()
    let elements = document.getElementsByName('answer')
    let finalAnswer = ""
    for (let i = 0; i < elements.length; i++) {
      if(elements[i].checked) finalAnswer = elements[i].value
    }
    handler(finalAnswer)

  }


  return (
    <Form >
      <legend>Question {questionNumber}</legend>
      <p>{question}</p>

      <FormGroup check>
        <Label check>
          <Input 
            id="answer_01"
            type="radio" 
            name="answer"
            value={answers[0]}
            />{' '}
          {answers[0]}
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input 
            id="answer_02"
            type="radio" 
            name="answer"
            value={answers[1]}
            />{' '}
          {answers[1]}
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input 
            id="answer_03"
            type="radio" 
            name="answer"
            value={answers[2]}
            />{' '}
          {answers[2]}
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input 
            id="answer_04"
            type="radio" 
            name="answer"
            value={answers[3]}
            />{' '}
          {answers[3]}
        </Label>
      </FormGroup>

      <Button onClick={handleClick}>Submit</Button>
    </Form>
  )
}

export default QuestionForm