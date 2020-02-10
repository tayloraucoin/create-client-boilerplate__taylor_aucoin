import React from "react";
import styled from "styled-components";

import { FormatStyling } from "../../../constants/styles/format";

const Root = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${FormatStyling};
`;

export default ({ children, styleProperties }) => (
  <Root {...styleProperties}>{children}</Root>
);
