import React from "react";
import styled from "styled-components";

import { c_black, c_white } from "../../../constants/styles/colors";
import {
  t_font_family,
  t_font_family_title
} from "../../../constants/styles/typography";
import Navbar from "../../nav/Navbar/Navbar";
import getColumns from "./utils/getColumns";

const StyledPage = styled.div`
  background-color: ${c_white};
  color: ${c_black};
  font-family: ${t_font_family};
  min-height: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${t_font_family_title} !important;
  }
`;

const Inner = styled.div`
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  max-width: 1440px;
  min-height: calc(100vh - 60px);
  overflow: auto;
  padding: 64px;
  position: relative;
`;

const Columns = styled.div`
  bottom: 0;
  display: ${props => (props.visible ? "flex" : "none")};
  height: 100%;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export default ({ children, history }) => (
  <StyledPage>
    <Navbar history={history} />
    <Inner>
      {children}
      <Columns visible={false}>{getColumns()}</Columns>
    </Inner>
  </StyledPage>
);
