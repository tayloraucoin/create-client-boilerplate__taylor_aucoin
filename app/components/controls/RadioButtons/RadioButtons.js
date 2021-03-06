import React from "react";
import styled, { css } from "styled-components";

import { FormatStyles } from "../../../constants/styles/format";
import ComponentLabel from "../../display/ComponentLabel/ComponentLabel";
import ComponentMessage from "../../display/ComponentMessage/ComponentMessage";

const Root = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`;

const HeaderLabel = styled.span`
  margin-bottom: 4px;
  width: 100%;
`;

const RadioInput = styled.input`
  margin-right: 4px;
`;

export const RadioButton = props => {
  const { error, fieldName, label, option, selected, updateSelection } = props;

  const styleProps = {
    lastBottom: props.lastBottom,
    lastRight: props.lastRight,
    marginBottom: props.marginBottom,
    marginRight: props.marginRight
  };

  return (
    <Root
      {...styleProps}
      className="radioButton"
      onClick={() => updateSelection({ name: fieldName, value: option.name })}
    >
      {label ? <HeaderLabel>{label} </HeaderLabel> : null}
      <RadioInput checked={selected} name={option.name} readOnly type="radio" />
      {option.label}
      {error ? <ComponentMessage message={error} /> : null}
    </Root>
  );
};

const VerticalStyle = css`
  .radioButton {
    width: 100%;
  }
`;

const RootGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .radioButton {
    margin-bottom: 0.5rem;
  }

  ${props => props.vertical && VerticalStyle};
  ${FormatStyles};
`;

export default ({
  error,
  fieldName,
  label,
  options,
  selected,
  styleProperties,
  updateSelection,
  vertical
}) => (
  <RootGroup {...styleProperties} className="radioButtons" vertical={vertical}>
    {label && <ComponentLabel>{label} </ComponentLabel>}
    {options.map((option, index) => (
      <RadioButton
        fieldName={fieldName}
        key={index}
        option={option}
        selected={selected === option.name}
        updateSelection={updateSelection}
      />
    ))}
    {error ? <ComponentMessage message={error} /> : null}
  </RootGroup>
);
