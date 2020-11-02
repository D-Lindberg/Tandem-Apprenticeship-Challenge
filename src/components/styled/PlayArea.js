import React, {useContext} from 'react';
import {RoundContext} from '../context/ContextsRoundDetails'
import styled from 'styled-components';
import Welcome from './Welcome'
import Question from './Question'
import Answer from './Answer'

const StyledPlayArea = styled.div`
  position: absolute;
  top: 20vh;
  left: 0vw;
  height: 79vh;
  width: 79vw;
  background-color: #33aced
`

const PlayArea = () => {
  const RoundDetails = useContext(RoundContext)
  const {display} = RoundDetails.state
  return (
    <StyledPlayArea data-testid="PLayArea" >
      {display === -1 && <Welcome />}
      {display === 0 && <Question />}
      {display === 1 && <Answer />}
    </StyledPlayArea >
  )
}

export default PlayArea