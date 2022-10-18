import React, { useRef } from "react";
import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default function Example11() {
  const inputRef = useRef();
  return (
    <Wrapper>
      <Input
        ref={inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={() => {
          inputRef.current.focus();
        }}
      />
    </Wrapper>
  );
}
