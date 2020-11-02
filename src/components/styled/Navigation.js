import React from 'react';
import styled from 'styled-components';
import Start from '../logic/Start'



const StyledNav = styled.nav`
  position: absolute;
  top: 20vh;
  left: 80vw;
  width: 19vw;
  height: 79vh;
  display: flex;
  flex-direction: column;
  background-color: #33aced

`

const Navigation = () => {
  return (
    <StyledNav data-testid="Navigation" >
      <Start />
    </StyledNav >
  )
}

export default Navigation