import React from "react";
import styled from "styled-components";

import { FormatStyling } from "../../../constants/styles/format";
import { c_grey_light } from "../../../constants/styles/colors";
import Button from "../../controls/Button/Button";
import Heading from "./components/Heading";

const Root = styled.div`
  align-content: flex-start;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: ${props =>
    props.shadow && `${c_grey_light} 1px 1px 0.9em`};
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  min-height: 128px;
  position: relative;
  width: 770px;

  h2 {
    margin-bottom: ${props => props.titleMargin === false && 0};
  }

  ${FormatStyling};
`;

const Content = styled.div`
  padding: 3rem 4rem;
  width: 100%;
`;

const Title = styled.h2`
  line-height: 1.25;
  margin: 0;
  margin-bottom: 2rem;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;

  button {
    margin-right: 0.5rem;
    padding: 6px 24px !important;
  }
`;

export default ({
  buttons,
  children,
  heading,
  shadow,
  styleProperties,
  title,
  titleMargin
}) => (
  <Root
    {...styleProperties}
    className="form"
    heading={heading}
    shadow={shadow}
    titleMargin={titleMargin}
  >
    {heading && <Heading>{title}</Heading>}
    <Content>
      {!heading && title && <Title>{title}</Title>}
      {children}
      {buttons && (
        <ButtonsContainer>
          {buttons.map(button => (
            <Button
              key={button.text}
              onClick={button.onClick}
              text={button.text}
            />
          ))}
        </ButtonsContainer>
      )}
    </Content>
  </Root>
);
