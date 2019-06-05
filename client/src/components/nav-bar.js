import React from "react";
import styled from "styled-components";
import { darken } from "polished";

export const NAVBAR_HEIGHT = "5em";

const Bar = styled.div`
  width: 100%;
  text-align: center;
`;

const NavBar = ({ children }) => <Bar>{children}</Bar>;

export default NavBar;