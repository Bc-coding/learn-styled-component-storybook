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

// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

/*
In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.
For this situation, we have an escape hatch. You can use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote:
This works perfectly fine with custom components too!
*/

export default function Example5() {
  return (
    <>
      <Wrapper>
        <Title>Exmaple 5</Title>
        <Button>Normal Button</Button>
        <Button as="a" href="#">
          Link with Button styles
        </Button>
        <Button as={ReversedButton}>
          Custom Button with Normal Button styles
        </Button>
      </Wrapper>
    </>
  );
}
