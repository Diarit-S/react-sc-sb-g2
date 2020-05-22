import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProfileWrapper = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: white;
  border-radius: 50%;
`;

export const Profile = ({ person, size }) => {
  return <ProfileWrapper size={size} src={person} />;
};

Profile.propTypes = {
  person: PropTypes.string,
  size: PropTypes.string,
};
