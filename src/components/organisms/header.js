import React from "react";
import styled from "styled-components";
import stylePropType from "react-style-proptype";
import PropTypes from "prop-types";
import { Icon } from "../atoms/Icon";
import { Profile } from "../atoms/Profile";

const HeaderWrapper = styled.header`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 20px 0px;
  box-sizing: border-box;
  padding: 0 20px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const Header = ({ person, icons }) => {
  return (
    <HeaderWrapper>
      <Profile person={person} size={"40px"} />
      <Icons>
        <Icon icon={icons[0]} size={"23"} style={{ gridColumnStart: 3 }} />
        <Icon icon={icons[1]} size={"23"} />
        <Icon icon={icons[2]} size={"23"} />
      </Icons>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  person: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.string),
  style: stylePropType || null,
};
