import React from "react";
import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const Component = styled.div`
  color: red;
`;

/*
If you want to keep all the styling you've applied to a component but just switch out what's being ultimately rendered (be it a different HTML tag or a different custom component), you can use the "as" prop to do this at runtime.
This sort of thing is very useful in use cases like a navigation bar where some of the items should be links and some just buttons, but all be styled the same way.
*/

export default function Example13() {
  return (
    <Wrapper>
      <Component as="button" onClick={() => alert("It works!")}>
        Hello World!
      </Component>
    </Wrapper>
  );
}
