import React from "react";
import styled from "styled-components";

import {
  c_grey_dark,
  c_grey_light
} from "../../../../constants/styles/colors";

const Root = styled.div`
  align-item: center;
  background-color: ${c_grey_dark};
  color: ${c_grey_light};
  display: flex;
  padding: 3rem 4rem;
  width: 100%;

  h2 {
    margin: 0;
  }
`;

export default ({ children }) => (
  <Root>
    <h2>{children}</h2>
  </Root>
);
