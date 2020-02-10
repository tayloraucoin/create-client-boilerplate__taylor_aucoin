import { withStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import styled, { css } from "styled-components";

import { FormatStyling } from "../../../constants/styles/format";
import { c_grey_dark } from "../../../constants/styles/colors";

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
  display: flex;
  height: fit-content;
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

  ${FormatStyling};
  ${props => props.small && SmallSizeStyle};
`;

const Label = styled.span`
  color: ${c_grey_dark};
  font-size: 14px;
  height: 14px;
  line-height: 14px;
  margin-left: 1rem;
  padding-top: 3px;
`;

export default ({
  checked,
  label,
  name,
  onChange,
  small,
  styleProperties,
  value
}) => {
  const StyledCheckbox = withStyles({
    root: {
      color:
        styleProperties && styleProperties.color
          ? styleProperties.color
          : "#181923",
      "&$checked": {
        color:
          styleProperties && styleProperties.color
            ? styleProperties.color
            : "#2A2B39"
      }
    },
    checked: {}
  })(props => <Checkbox {...props} />);

  return (
    <Root {...styleProperties} small={small}>
      <StyledCheckbox
        checked={checked}
        onChange={() => (onChange ? onChange({ name, value }) : false)}
      />
      {label && <Label>{label}</Label>}
    </Root>
  );
};
