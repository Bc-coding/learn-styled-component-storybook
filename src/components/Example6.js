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
The styled method works perfectly on all of your own or any third-party component, as long as they attach the passed className prop to a DOM element.*/

// This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
  <a className={className} href="bellecarrie.com">
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

/*
NOTE
You can also pass tag names into the styled() factory call, like so: styled("div"). In fact, the styled.tagname helpers are just aliases that do the same.
*/

export default function Example6() {
  return (
    <Wrapper>
      <Title>Exmaple 6</Title>

      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </Wrapper>
  );
}
