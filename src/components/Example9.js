import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
  fg: "palevioletred",
  bg: "white",
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});
export default function Example9() {
  return (
    <>
      <Wrapper>
        <ThemeProvider theme={theme}>
          <div>
            <Button>Default Theme</Button>

            <ThemeProvider theme={invertTheme}>
              <Button>Inverted Theme</Button>
            </ThemeProvider>
          </div>
        </ThemeProvider>
      </Wrapper>
    </>
  );
}
