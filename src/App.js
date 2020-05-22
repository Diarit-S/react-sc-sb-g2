import React from "react";
import styled from "styled-components";
import { ResetCss } from "./styles/reset";
import { Navbar } from "./components/molecules/navbar";
import PropTypes from "prop-types";

const AppWrapper = styled.div`
  display: flex;
  font-family: "Roboto";
`;

export default function App() {
  return (
    <AppWrapper>
      <ResetCss />
      <Navbar
        navbarContents={[
          { active: true, name: "Categories" },
          { active: false, name: "Chaines live" },
        ]}
      />
    </AppWrapper>
  );
}

export const NavbarContentsType = PropTypes.shape({
  active: PropTypes.bool,
  name: PropTypes.string,
});
