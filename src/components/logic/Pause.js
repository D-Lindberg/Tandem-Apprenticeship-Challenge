import React, { useContext } from 'react';
import Button from '../styled/Button'
import {RoundContext} from '../context/ContextsRoundDetails'


const Pause = () => {
  const RoundDetails = useContext(RoundContext)
  const handleClick = (e) => {
    e.preventDefault()
    RoundDetails.dispatch({type:"PAUSE_GAME"})
  }
  return (
    <div data-testid="Pause" >
    <Button label="Pause" handler={handleClick} />
    </div >
  )
}

export default Pause