import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavbarContentsType } from "../../App";

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  font-size: 18px;
`;

const Text = styled.p`
  color: ${(props) => props.navActive === props.index && "#af85cd"};
`;

export const Tab = ({ content, index, navActive, onClick }) => {
  return (
    <TabWrapper
      onClick={() => {
        onClick();
      }}
    >
      <Text index={index} navActive={navActive} isActive={content.active}>
        {content.name}
      </Text>
    </TabWrapper>
  );
};

Tabs.propTypes = {
  navbarContents: NavbarContentsType,
  index: PropTypes.number,
  navActive: PropTypes.number,
  onClick: PropTypes.func,
};
