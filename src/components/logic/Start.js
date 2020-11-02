import React, { useContext } from 'react';
import Button from '../styled/Button'
import {RoundContext} from '../context/ContextsRoundDetails'


const Start = () => {
  const RoundDetails = useContext(RoundContext)
  const handleClick = (e) => {
    e.preventDefault()
    RoundDetails.dispatch({type:"START_GAME"})
  }
  return (
    <div data-testid="Start" >
    <Button label="Start" handler={handleClick} />
    </div >
  )
}

export default Start