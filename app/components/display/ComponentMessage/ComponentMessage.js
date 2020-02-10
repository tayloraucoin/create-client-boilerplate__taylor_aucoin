import React from "react";
import styled from "styled-components";

import { c_error } from "../../../constants/styles/colors";

const Root = styled.span`
  color: ${c_error};
  font-size: 0.7rem;
  line-height: 14px;
  padding-left: 4px;
  padding-top: 2px;
`;

export default ({ message }) => <Root>{message}</Root>;
