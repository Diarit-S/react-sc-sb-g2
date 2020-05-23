import React, { useState } from "react";
import styled from "styled-components";
import { Tab } from "../atoms/tab";
import { NavbarContentsType } from "../../App";
import PropTypes from "prop-types";

const NavWrapper = styled.div`
  display: grid;
  grid-template: ${(props) => `20px / repeat(${props.length}, 1fr)`};
  grid-column-gap: 10px;
  margin: 20px 0px 0px 20px;
`;

const Span = styled.div`
  width: 100%;
  height: 3px;
  background-color: #af85cd;
  margin-top: 15px;
  grid-column-start: ${(props) => props.navActive + 1};
  transition-duration: 2s;
`;

export const Navbar = ({ navbarContents }) => {
  const [navActive, setNavActive] = useState(0);
  return (
    <NavWrapper length={navbarContents.length}>
      {navbarContents.map((content, i) => {
        return (
          <Tab
            key={i}
            content={content}
            index={i}
            navActive={navActive}
            onClick={() => {
              setNavActive(i);
            }}
          />
        );
      })}
      <Span navActive={navActive} />
    </NavWrapper>
  );
};

Navbar.propTypes = {
  navbarContents: PropTypes.arrayOf(NavbarContentsType),
};
