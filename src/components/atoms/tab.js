import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  font-size: 18px;
`;

const Text = styled.span`
  cursor: pointer;
  color: ${(props) => props.navActive === props.index && "#af85cd"};
  font-family: 'Roboto';
`;

export const Tab = ({ content, index, navActive, onClick }) => {
  return (
    <TabWrapper
      onClick={() => {
        onClick();
      }}
    >
      <Text index={index} navActive={navActive}>
        {content}
      </Text>
    </TabWrapper>
  );
};

Tab.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  navActive: PropTypes.number,
  onClick: PropTypes.func,
};
