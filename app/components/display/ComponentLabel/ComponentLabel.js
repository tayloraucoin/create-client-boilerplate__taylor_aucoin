import React from "react";
import styled from "styled-components";

import { t_font_family } from "../../../constants/styles/typography";

const Root = styled.label`
  background-color: transparent;
  display: flex;
  font-family: ${t_font_family};
  font-size: 0.8rem;
  font-weight: 300;
  left: 6px;
  padding-bottom: 4px;

  .required-asterisk {
    margin-left: 2px;
  }
`;

export default ({ children, required }) => (
  <Root>
    {children} {required && <span className="required-asterisk">*</span>}
  </Root>
);
