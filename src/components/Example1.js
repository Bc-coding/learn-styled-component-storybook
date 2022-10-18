import React from "react";
import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: grey;
  font-size: 32px;
  color: white;
  border-radius: 4px;
`;

export default function Example1() {
  return (
    <>
      <Wrapper>
        <Title>Exmaple 1</Title>
        <StyledButton>Button</StyledButton>
      </Wrapper>
    </>
  );
}
