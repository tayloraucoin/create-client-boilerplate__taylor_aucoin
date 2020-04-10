import { withStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import styled, { css } from "styled-components";

import { FormatStyles } from "../../../constants/styles/format";
import { c_grey_dark } from "../../../constants/styles/colors";
import ComponentLabel from "../../display/ComponentLabel/ComponentLabel";

const SmallSizeStyle = css`
  .MuiButtonBase-root {
    height: 14px;
    padding: 0;
    width: 14px;

    .MuiIconButton-label {
      height: 14px;

      svg {
        height: 14px;
        width: 14px;
      }
    }
  }
`;

const Root = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: fit-content;
  margin: ${props =>
    props.groupDirection === "vertical"
      ? "5px 0"
      : props.groupDirection === "horizontal"
      ? "0 5px"
      : 0};
  position: relative;
  width: 100%;

  .MuiButtonBase-root {
    height: 18px;
    padding: 0;
    width: 18px;

    .MuiIconButton-label {
      height: 18px;

      svg {
        height: 18px;
        width: 18px;
      }
    }
  }

  ${FormatStyles};
  ${props => props.small && SmallSizeStyle};
`;

const Label = styled.label`
  color: ${c_grey_dark};
  cursor: pointer;
  font-size: 14px;
  height: 14px;
  line-height: 14px;
  margin-left: 1rem;
  padding-top: 3px;
`;

const CheckboxElement = ({
  checked,
  className,
  fieldName,
  groupDirection,
  label,
  name,
  onChange,
  small,
  styleProps,
  value
}) => {
  const StyledCheckbox = withStyles({
    root: {
      color: styleProps && styleProps.color ? styleProps.color : "#181923",
      "&$checked": {
        color: styleProps && styleProps.color ? styleProps.color : "#2A2B39"
      }
    },
    checked: {}
  })(props => <Checkbox {...props} />);

  const handleClick = () => {
    onChange({ fieldName, name, value });
  };

  return (
    <Root
      className={`checkbox ${className}`}
      groupDirection={groupDirection}
      onClick={handleClick}
      small={small}
    >
      <StyledCheckbox checked={checked} />
      <Label>{label ? label : name}</Label>
    </Root>
  );
};

export default CheckboxElement;

const gridGroupRoot = css`
  .checkboxes {
    justify-content: flex-start;

    .checkboxUnit {
      box-sizing: border-box;
      height: fit-content;
      padding: 4px 6px;
      width: ${props =>
        props.gridColumnNumber
          ? `calc(100% / ${props.gridColumnNumber})`
          : "fit-content"};

      .checkbox {
        label {
          margin-left: 4px;
        }
      }

      .subCheckbox {
        padding: 4px 0 4px 2px;

        .MuiButtonBase-root {
          height: 14px;
          padding: 0;
          width: 14px;

          .MuiIconButton-label {
            height: 14px;

            svg {
              height: 14px;
              width: 14px;
            }
          }
        }

        label {
          font-size: 12px;
          font-weight: 300;
        }
      }
    }
  }
`;

const verticalGroupRoot = css`
  .checkboxes {
    flex-direction: column;
  }
`;

const GroupRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${FormatStyles};

  ${props => props.grid && gridGroupRoot};
  ${props => props.direction === "vertical" && verticalGroupRoot};
`;

const Checkboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const CheckboxUnit = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SubOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 4px;
`;

export const CheckboxGroup = props => {
  const {
    checkedList,
    direction,
    fieldName,
    label,
    name,
    nestedOptions,
    options,
    onChange,
    small,
    subCheckedList,
    subOptionFieldName,
    subOptionPreFieldName
  } = props;

  const styleProps = {
    color: props.color,
    grid: props.grid,
    gridColumnNumber: props.gridColumnNumber,
    marginRight: props.marginRight,
    marginRightDouble: props.marginRightDouble,
    small: props.small
  };

  const renderCheckboxItem = ({ option, index }) => {
    /* Check if value is in checkedList */
    // DEBT: option.checked
    const checkValue = (propName, sub) => {
      if (!sub) {
        return checkedList
          ? checkedList.indexOf(propName) > -1
          : option.checked;
      }
      if (subCheckedList) return subCheckedList.indexOf(propName) > -1;
      return checkedList.indexOf(propName) > -1;
    };

    const checkedRootValue = checkValue(option.name);

    return (
      <CheckboxUnit className="checkboxUnit">
        <CheckboxElement
          checked={checkedRootValue}
          fieldName={fieldName}
          groupDirection={direction}
          key={index}
          label={option.label ? option.label : option.name}
          name={name}
          onChange={onChange}
          small={small}
          styleProps={styleProps}
          value={option.value ? option.value : option.name}
        />
        {subOptionFieldName &&
        option[subOptionFieldName] &&
        option[subOptionFieldName].length &&
        checkedRootValue ? (
          <SubOptions>
            {option[subOptionFieldName].map(subOption => {
              return (
                <CheckboxElement
                  checked={checkValue(subOption.name, true)}
                  className="subCheckbox"
                  fieldName={fieldName}
                  groupDirection={direction}
                  key={index}
                  label={subOption.name}
                  name={`${
                    subOptionPreFieldName ? `${subOptionPreFieldName}—` : ""
                  }${subOptionFieldName}`}
                  onChange={onChange}
                  small={small}
                  subOption
                  styleProps={styleProps}
                  value={subOption.value ? subOption.value : subOption.name}
                />
              );
            })}
          </SubOptions>
        ) : null}
      </CheckboxUnit>
    );
  };

  return (
    <GroupRoot {...styleProps} direction={direction}>
      {label && <ComponentLabel>{label}</ComponentLabel>}
      <Checkboxes className="checkboxes">
        {!nestedOptions &&
          options.map((option, index) => {
            return renderCheckboxItem({ option, index });
          })}
        {nestedOptions &&
          Object.keys(options).map((key, index) => {
            return renderCheckboxItem({ option: options[key], index });
          })}
      </Checkboxes>
    </GroupRoot>
  );
};
