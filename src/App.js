import React from "react";
import styled from "styled-components";
import { ResetCss } from "./styles/reset";
import billy from "./assets/img/rebeu.png";
import { Header } from "./components/organisms/header";

const AppWrapper = styled.div`
  display: grid;
  font-family: "Roboto";
  grid-template: 100%;
  grid-column-gap: 40px;
  margin: 0 20px;
`;

export default function App() {
  return (
    <AppWrapper>
      <ResetCss />
      <Header person={billy} icons={["notification", "message", "search"]} />
    </AppWrapper>
  );
}
