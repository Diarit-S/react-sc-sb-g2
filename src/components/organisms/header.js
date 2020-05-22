import React from "react";
import styled from "styled-components";
import rebeu from "../../assets/img/rebeu.png";
import { Icon } from "../atoms/Icon";

const HeaderWrapper = styled.header`
  display: grid;
  height: 50px;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1.5fr 50% 1fr 1fr 1fr;
  margin: 20px 0px 20px 0px;
`;

const Profile = styled.img`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Profile src={rebeu} />
      <Icon icon={"notification"} size={"23"} style={{ gridColumnStart: 3 }} />
      <Icon icon={"message"} size={"23"} />
      <Icon icon={"search"} size={"23"} />
    </HeaderWrapper>
  );
};
