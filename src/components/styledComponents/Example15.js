import React from "react";
import styled, { ThemeProvider } from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const Box = styled.div`
  color: ${(props) => props.theme.color};
`;

/*
css prop v4
Sometimes you don't want to create an extra component just to apply a bit of styling. The css prop is a convenient way to iterate on your components without settling on fixed component boundaries yet. It works on both normal HTML tags as well as components, and supports everything any styled component supports, including adapting based on props, theming and custom components.
*/

export default function Example15() {
  return (
    <Wrapper>
      <ThemeProvider theme={{ color: "mediumseagreen" }}>
        <Box>I'm mediumseagreen!</Box>

        <Box css="padding: 0.5em 1em; border: 1px solid black;">
          I'm mediumseagreen with CSS prop!
        </Box>
      </ThemeProvider>
    </Wrapper>
  );
}
