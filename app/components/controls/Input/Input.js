import React from "react";
import styled from "styled-components";

import { FormatStyling } from "../../../constants/styles/format";
import { c_grey_dark } from "../../../constants/styles/colors";
import ComponentLabel from "../../display/ComponentLabel/ComponentLabel";
import ComponentMessage from "../../display/ComponentMessage/ComponentMessage";

const Root = styled.div`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 12rem;

  ${FormatStyling};
`;

const InputBar = styled.input`
  background-color: white;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0 2.5px ${c_grey_dark};
  font-size: 0.85rem;
  font-weight: 300;
  padding: 0.75rem;
  width: 100%;
`;

export default ({
  autocomplete,
  label,
  messages,
  name,
  onChange,
  onKeyPress,
  onKeyPressEnter,
  placeholder,
  required,
  styleProperties,
  type,
  value
}) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onKeyPressEnter();
    }
  };

  return (
    <Root {...styleProperties}>
      {label && <ComponentLabel required={required}>{label}</ComponentLabel>}
      <InputBar
        autoComplete={autocomplete}
        name={name}
        onChange={event =>
          onChange({
            name: event.target.name,
            value: event.target.value
          })
        }
        onKeyPress={
          onKeyPress || onKeyPressEnter ? event => handleKeyPress(event) : null
        }
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
