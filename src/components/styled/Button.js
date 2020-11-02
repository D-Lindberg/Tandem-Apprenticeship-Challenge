import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid turquoise;
  border-radius: 5px;
  margin: 2px;
  padding: 2px;
  width: auto;

`

const Button = ({ label, handler }) => {
  return (
    <StyledButton data-testid="button" onClick={handler} >
      {label}
    </StyledButton >
  )
}

export default Button