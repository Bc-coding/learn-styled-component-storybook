import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

// Define our button
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// Define what main theme will look like
const theme = {
  main: "mediumseagreen",
};

export default function Example10() {
  return (
    <>
      <Wrapper>
        <Button theme={{ main: "royalblue" }}>Ad hoc theme</Button>
        <Button>Button with out theme</Button>
        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
          <Button theme={{ main: "darkorange" }}>Overridden</Button>
        </ThemeProvider>
      </Wrapper>
    </>
  );
}
