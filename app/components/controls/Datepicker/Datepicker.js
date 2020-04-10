import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import React from "react";
import moment from "moment";
import styled from "styled-components";

import { FormatStyles } from "../../../constants/styles/format";
import { c_brand_primary } from "../../../constants/styles/colors";
import ComponentLabel from "../../display/ComponentLabel/ComponentLabel";

const Root = styled.div`
  width: 12rem;

  input {
    border: 0;
    border-radius: 0.28571429rem;
    box-shadow: 0 0 2.5px ${c_brand_primary};
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    height: 42.5px;
    line-height: 1em;
    outline: none;
    padding: 0.78571429em 2.1em 0.78571429em 1em;
  }

  .react-datepicker-wrapper {
    width: 100%;

    .react-datepicker__input-container {
      width: 100%;

      input {
        width: calc(100% - 36px);
      }
    }
  }

  ${FormatStyles};
`;

export default props => {
  const {
    dateFormat,
    label,
    name,
    onChange,
    required,
    selected,
    showYearDropdown
  } = props;

  const styleProps = {
    fullSize: props.fullSize,
    half: props.half,
    last: props.last,
    marginBottom: props.marginBottom,
    noMargin: props.noMargin
  };

  const onChangeDate = date => {
    onChange({
      name,
      value: moment(date).unix()
    });
  };

  return (
    <Root {...styleProps}>
      {label && <ComponentLabel required={required}>{label}</ComponentLabel>}
      <DatePicker
        dateFormat={dateFormat}
        onChange={onChangeDate}
        scrollableYearDropdown
        selected={selected}
        showYearDropdown={showYearDropdown}
      />
    </Root>
  );
};
