import React from "react";
import styled from "styled-components";
import { ResetCss } from "./styles/reset";
import { Navbar } from "./components/molecules/navbar";

const AppWrapper = styled.div`
  display: flex;
  font-family: "Roboto";
`;

export default function App() {
  return (
    <AppWrapper>
      <ResetCss />
      <Navbar
        navbarContents={["Categories", "Chaines live" ]}
      />
    </AppWrapper>
  );
}
