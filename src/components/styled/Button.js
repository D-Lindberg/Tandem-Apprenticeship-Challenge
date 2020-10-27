import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid red;
  margin: 5px;
  padding: 10px;
  font-size: 3rem;
`

const Button = ({ label, handler }) => {
  return (
    <StyledButton data-testid="button" onClick={handler}>
      {label}
    </StyledButton>
  )
}

export default Button