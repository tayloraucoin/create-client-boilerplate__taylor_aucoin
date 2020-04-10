import React from "react";
import styled from "styled-components";

import { FormatStyles } from "../../../constants/styles/format";
import { c_brand_primary } from "../../../constants/styles/colors";

const Root = styled.div`
  background-color: ${props => (props.color ? props.color : c_brand_primary)};
  height: 2px;
  opacity: 0.7;
  margin: ${props => `${props.margin ? props.margin : "1"}rem 0`};
  width: 100%;

  ${FormatStyles};
`;

export default props => {
  const styleProps = {
    color: props.color,
    margin: props.margin,
    marginSkinny: props.marginSkinny
  };

  return <Root {...styleProps} />;
};
