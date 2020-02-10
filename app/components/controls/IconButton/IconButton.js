import React from "react";
import styled, { css } from "styled-components";

import { c_grey_light } from "../../../constants/styles/colors";

const IconColor = css`
  svg {
    fill: ${props => props.iconColor};
  }
`;

const Root = styled.div`
  align-items: center;
  background-color: ${c_grey_light};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
  ${props => (props.iconColor ? `${IconColor}` : null)};
`;

export default ({ children, disabled, iconColor, onClick }) => (
  <Root disabled={disabled} iconColor={iconColor} onClick={onClick && onClick}>
    {children}
  </Root>
);
