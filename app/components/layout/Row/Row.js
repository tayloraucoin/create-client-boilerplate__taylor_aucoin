import React from "react";
import styled from "styled-components";

import { FormatStyles } from "../../../constants/styles/format";

const Root = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${FormatStyles};
`;

export default props => {
  const { children } = props;

  const styleProps = {
    alignTop: props.alignTop,
    half: props.half,
    largeWidth: props.largeWidth,
    lastBottom: props.lastBottom,
    lastRight: props.lastRight,
    marginBottom: props.marginBottom,
    marginSkinny: props.marginSkinny,
    marginRight: props.marginRight,
    marginTop: props.marginTop,
    noMargin: props.noMargin
  };

  return <Root {...styleProps}>{children}</Root>;
};
