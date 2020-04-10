import React from "react";
import styled from "styled-components";

import {
  c_brand_primary,
  c_brand_light
} from "../../../../constants/styles/colors";

const Root = styled.div`
  align-item: center;
  background-color: ${c_brand_primary};
  color: ${c_brand_light};
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
