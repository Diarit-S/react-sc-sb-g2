import React from "react";
import styled from "styled-components";

const ProfileWrapper = styled.img`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
`;

export const Profile = ({ person }) => {
  return <ProfileWrapper src={person} />;
};
