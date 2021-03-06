import React, { useContext } from 'react';
import Button from '../styled/Button'
import {RoundContext} from '../context/ContextsRoundDetails'

const Quit = () => {
  const RoundDetails = useContext(RoundContext)
  const handleClick = (e) => {
    e.preventDefault()
    RoundDetails.dispatch({type:"QUIT_GAME"})
  }

  return (
    <div data-testid="Quit" >
    <Button label="Quit" handler={handleClick}/>
    </div >
  )
}

export default Quit