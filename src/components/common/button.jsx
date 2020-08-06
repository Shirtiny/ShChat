import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 80px;
  background-color: #2ed573;
`;

const Button = ({ onClick, lable, children }) => {
  return (
    <StyledButton onClick={onClick}>
      <button>{lable}</button>
      {children}
    </StyledButton>
  );
};

export default Button;
