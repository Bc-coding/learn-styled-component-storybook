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

/*
Passed props
If the styled target is a simple element (e.g. styled.div), styled-components passes through any known HTML attribute to the DOM. If it is a custom React component (e.g. styled(MyComponent)), styled-components passes through all props.
This example shows how all props of the Input component are passed on to the DOM node that is mounted, as with React elements.
*/

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// Render a styled text input with the standard input color, and one with a custom input color

export default function Example7() {
  return (
    <>
      <Wrapper>
        <Title>Exmaple 7</Title>
        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      </Wrapper>
    </>
  );
}
