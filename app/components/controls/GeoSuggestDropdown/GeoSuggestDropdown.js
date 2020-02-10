import React from "react";
import styled, { css } from "styled-components";

import Geosuggest from "react-geosuggest";

import { FormatStyling, f_half_width } from "../../../constants/styles/format";
import {
  c_black,
  c_grey_dark,
  c_off_white
} from "../../../constants/styles/colors";
import {
  t_font_family,
  t_letter_spacing
} from "../../../constants/styles/typography";
import ComponentLabel from "../../display/ComponentLabel/ComponentLabel";

const HalfStyle = css`
  ${f_half_width}

  .geosuggest__input {
    width: 100%;
  }
`;

const OpenStyle = css`
  .geosuggest__input {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Root = styled.div`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  min-width: 12rem;
  width: fit-content;

  .geosuggest,
  .geosuggest__input-wrapper {
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
    position: relative;
    width: 100%;
  }

  .geosuggest__input {
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 2.5px ${c_grey_dark};
    color: ${c_black};
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    font-family: ${t_font_family};
    font-size: 0.85rem;
    letter-spacing: ${t_letter_spacing};
    min-width: calc(12rem - 24px);
    padding: 12px;
    position: relative;
    width: calc(100% - 28px);
  }

  .geosuggest__suggests-wrapper {
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 37px;
    width: 100%;
  }

  .geosuggest__suggests {
    background-color: white;
    box-shadow: 0 0 2.5px ${c_grey_dark};
    border-top: none;
    margin-top: 8px;
    min-width: 12rem;
    padding: 0;
    width: calc(100% - 2px);
    z-index: 1;
  }

  .geosuggest__suggests--hidden {
    max-height: 0;
    overflow: hidden;
    border-width: 0;
  }

  .geosuggest__item--active {
    background: ${c_grey_dark};
    color: white;
  }

  .geosuggest__item {
    cursor: pointer;
    font-family: ${t_font_family};
    font-size: 0.85rem;
    list-style-type: none;
    padding: 0.45rem 0;
    padding-left: 1rem;
    padding-right: 0.5rem;
    width: calc(100% - 24px);

    &:hover {
      background-color: ${c_off_white};
    }
  }

  ${props => props.half && HalfStyle};
  ${props => props.open && OpenStyle};
  ${FormatStyling};
`;

export default ({
  initialValue,
  label,
  name,
  onChange,
  placeholder,
  required,
  open,
  styleProperties,
  types,
  value
}) => {
  const handleNullChange = value => {
    if (!value) {
      onChange({
        name,
        value: null
      });
    }
  };

  const handleSuggestSelect = suggest => {
    if (suggest) {
      onChange({
        name,
        value: suggest.description
      });
    }
  };

  return (
    <Root {...styleProperties} className="geosuggestDropdown" open={open}>
      {label && <ComponentLabel required={required}>{label}</ComponentLabel>}
      <Geosuggest
        autoActivateFirstSuggest
        initialValue={value ? value : initialValue}
        onChange={handleNullChange}
        onSuggestSelect={handleSuggestSelect}
        placeholder={placeholder}
        types={types || ["(cities)"]}
      />
    </Root>
  );
};
