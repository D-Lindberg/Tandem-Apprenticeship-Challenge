import React, {useContext} from 'react';
import styled from 'styled-components';
import {RoundContext} from '../context/ContextsRoundDetails'

const StyledDisplay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 19vh;
  width: 79vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
`

const ScoreDisplay = () => {
  const RoundDetails = useContext(RoundContext)
  const {attempted, correct} = RoundDetails.state
  const prepareMessage= () => {
    let message = ''
    if (attempted === 0) {
      message = '0 questions Answered'
    } else {
      message = `${correct} out of ${attempted} correct`
    }
    return message
  }

  const message = prepareMessage ()
  return (
    <StyledDisplay data-testid="ScoreDisplay" >
      { message }
    </StyledDisplay >
  )
}

export default ScoreDisplay