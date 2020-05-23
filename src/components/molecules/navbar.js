import React, { useState } from "react";
import styled from "styled-components";
import { Tab } from "../atoms/tab";
import PropTypes from "prop-types";

const NavWrapper = styled.nav`
  display: grid;
  grid-template: ${(props) => `20px / repeat(${props.length}, 1fr)`};
  grid-column-gap: 10px;
  margin: 20px 0px 0px 20px;
  font-family: "Roboto";
`;

const Underline = styled.div`
  width: 100%;
  height: 3px;
  background-color: #af85cd;
  margin-top: 15px;
  grid-column-start: ${(props) => props.navActive + 1};
`;


/**
 * The `Navbar` molecule regroup nav items. An array of strings is expected as prop to display navigation.
 * For the cours, we pass simply an array of string, but in normally dev environment we would pass certains project routes.
 * 
 * Also, we have in some way hard code the activation of the item (syles changes on click), also cause we don't have routes...
 */
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
      <Underline navActive={navActive} />
    </NavWrapper>
  );
};

Navbar.propTypes = {
  navbarContents: PropTypes.arrayOf(PropTypes.string),
};
