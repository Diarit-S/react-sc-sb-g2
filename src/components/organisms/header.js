import React from "react";
import styled from "styled-components";
import billy from "../../assets/img/rebeu.png";
import { Icon } from "../atoms/Icon";
import { Profile } from "../atoms/Profile";

const HeaderWrapper = styled.header`
  display: grid;
  height: 50px;
  align-items: center;
  grid-template-columns: 1.5fr 40% 1fr 1fr 1fr;
  margin: 20px 0px 20px 0px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Profile person={billy} />
      <Icon icon={"notification"} size={"23"} style={{ gridColumnStart: 3 }} />
      <Icon icon={"message"} size={"23"} />
      <Icon icon={"search"} size={"23"} />
    </HeaderWrapper>
  );
};
