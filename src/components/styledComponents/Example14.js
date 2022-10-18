import React from "react";
import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const Comp = styled.div`
  color: ${(props) => props.$draggable || "black"};
`;
/*
If you want to prevent props meant to be consumed by styled components from being passed to the underlying React node or rendered to the DOM element, you can prefix the prop name with a dollar sign ($), turning it into a transient prop.
In this example, $draggable isn't rendered to the DOM like draggable is.*/

export default function Example14() {
  return (
    <Wrapper>
      <Comp $draggable="red" draggable="true">
        Drag me!
      </Comp>
    </Wrapper>
  );
}
