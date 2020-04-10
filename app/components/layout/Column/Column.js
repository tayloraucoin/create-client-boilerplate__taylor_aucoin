import React from "react";
import styled from "styled-components";

import { FormatStyles } from "../../../constants/styles/format";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => `calc(100% / ${props.columnNumber})`};

  ${FormatStyles};
`;

export default ({ children, columnNumber, contentRight }) => (
  <Root columnNumber={columnNumber} contentRight={contentRight}>
    {children}
  </Root>
);
