import React from "react";
import styled, { css } from "styled-components";

import { FormatStyles } from "../../../constants/styles/format";
import { c_grey_dark } from "../../../constants/styles/colors";
import ComponentLabel from "../../display/ComponentLabel/ComponentLabel";
import ComponentMessage from "../../display/ComponentMessage/ComponentMessage";

const TallStyle = css`
  min-height: 8rem;

  .textareaBar {
    min-height: 8rem;
  }
`;

const ExtraTallStyle = css`
  min-height: 12rem;

  .textareaBar {
    min-height: 12rem;
  }
`;

const Root = styled.div`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  position: relative;
  width: 12rem;

  ${props => props.tall && TallStyle};
  ${props => props.tallExtra && ExtraTallStyle};
  ${FormatStyles};
`;

// const TooltipInfo = styled.div`
//     align-items: center;
//     background-color: ${c_blue};
//     border-radius: 16px;
//     color: white;
//     cursor: pointer;
//     display: flex;
//     font-size: 0.6rem;
//     justify-content: center;
//     margin-left: 0.25rem;
//     padding: 0 5px;
// `;

const TextareaBar = styled.textarea`
  background-color: white;
  border-radius: 4px;
  border: 0;
  box-shadow: 0 0 2.5px ${c_grey_dark};
  font-size: 0.85rem;
  font-weight: 300;
  min-height: 32px;
  padding: 0.75rem;
  resize: vertical;
  width: 100%;
`;

export default props => {
  const {
    autocomplete,
    label,
    messages,
    name,
    onChange,
    onKeyPress,
    placeholder,
    required,
    type,
    value
  } = props;

  const styleProps = {
    fullSize: props.fullSize,
    half: props.half,
    largeWidth: props.largeWidth,
    lastBottom: props.lastBottom,
    lastRight: props.lastRight,
    marginBottom: props.marginBottom,
    marginRight: props.marginRight,
    noMargin: props.noMargin,
    small: props.small,
    tall: props.tall,
    tallExtra: props.tallExtra
  };

  return (
    <Root {...styleProps}>
      {label && <ComponentLabel required={required}>{label}</ComponentLabel>}
      <TextareaBar
        autoComplete={autocomplete}
        className="textareaBar"
        name={name}
        onChange={event =>
          onChange({
            name: event.target.name,
            value: event.target.value
          })
        }
        onKeyPress={onKeyPress ? event => onKeyPress(event) : null}
        placeholder={placeholder}
        type={type || "text"}
        value={value || ""}
      />
      {messages &&
        messages.length &&
        messages.map((message, index) => (
          <ComponentMessage key={index} message={message} />
        ))}
    </Root>
  );
};

/*
<Tooltip interactive title={ tooltipInfo }>
  <TooltipInfo>?</TooltipInfo>
</Tooltip>
*/
