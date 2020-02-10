import React from "react";
import styled from "styled-components";

import { FormatStyling } from "../../../constants/styles/format";
import { c_grey_light } from "../../../constants/styles/colors";

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin-bottom: ${props => props.last && 0};
  width: 100%;

  ${FormatStyling};
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  span {
    color: ${c_grey_light};
    font-size: 14px;
    margin-left: 8px;
  }
`;

export default ({ children, styleProperties, subTitle, title }) => (
  <Root {...styleProperties} className="section">
    {title && (
      <Header>
        <h3>{title}</h3>{" "}
        {subTitle ? <span className="title">{subTitle}</span> : null}
      </Header>
    )}
    {children}
  </Root>
);
