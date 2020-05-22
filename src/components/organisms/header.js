import React from "react";
import styled from "styled-components";
import stylePropType from "react-style-proptype";
import PropTypes from "prop-types";
import { Icon } from "../atoms/Icon";
import { Profile } from "../atoms/Profile";

const HeaderWrapper = styled.header`
  display: grid;
  height: 50px;
  align-items: center;
  grid-template-columns: 1.5fr 40% 1fr 1fr 1fr;
  margin: 20px 0px 20px 0px;
`;

export const Header = ({ person, icons }) => {
  return (
    <HeaderWrapper>
      <Profile person={person} size={"40px"} />
      <Icon icon={icons[0]} size={"23"} style={{ gridColumnStart: 3 }} />
      <Icon icon={icons[1]} size={"23"} />
      <Icon icon={icons[2]} size={"23"} />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  person: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.string),
  style: stylePropType || null,
};
