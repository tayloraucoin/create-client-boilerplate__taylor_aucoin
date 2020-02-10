import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import React from "react";
import styled, { css } from "styled-components";

import { FormatStyling } from "../../../constants/styles/format";
import {
  c_black,
  c_grey_dark,
  c_grey_light,
  c_grey_medium
} from "../../../constants/styles/colors";
import ComponentLabel from "../../display/ComponentLabel/ComponentLabel";
import ComponentMessage from "../../display/ComponentMessage/ComponentMessage";
import colorHexRGB from "../../../utils/colorHexRGB";
import getMenuItems from "./utils/getMenuItems";
import getSelectedText from "./utils/getSelectedText";

const BorderlessStyle = css`
  .selectedText {
    border: none;
  }
`;

const DisabledStyle = css`
  label {
    color: ${c_grey_medium};
  }

  .input {
    cursor: default;
  }

  .selectedText {
    box-shadow: 0 0 1px ${c_grey_dark};
  }
`;

const NavbarStyle = css`
  background-color: ${c_grey_dark};
  margin-bottom: 0;
  min-width: 3rem;

  .selectedText {
    padding: 6px 0.75rem 4px;
  }

  .input {
    background-color: ${c_grey_dark};
  }

  .menu {
    top: 43px;
  }
`;

const Root = styled.div`
  box-sizing: border-box;
  display: ${props => (props.hidden ? "none" : "flex")};
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 180px;
  min-width: ${props => props.small && "150px"};
  width: 12rem;
  width: ${props => props.fitContent && "fit-content"};
  width: ${props => props.small && "150px"};

  ${props => props.borderless && BorderlessStyle};
  ${props => props.disabled && DisabledStyle};
  ${props => props.navbar && NavbarStyle};
  ${FormatStyling};
`;

const Input = styled.div`
  background-color: white;
  box-sizing: border-box;
  color: ${c_black};
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.85rem;
  // height: 43px;
  min-width: 3rem;
  position: relative;
  width: 100%;

  ${FormatStyling};
`;

const SelectedTextOpenStyle = css`
  svg {
    transform: rotate(180deg);
  }
`;

const SelectedTextPlaceholderStyle = css`
  span {
    color: ${c_grey_medium};
    opacity: 0.8;
  }
`;

const SelectedTextNavbarStyle = css`
  border-color: rgb(${colorHexRGB(c_grey_light, "rgb")}, 0.8);
`;

const SelectedText = styled.div`
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 2.5px ${c_grey_dark};
  box-sizing: border-box;
  display: flex;
  height: 41px;
  justify-content: space-between;
  padding: 8px 0.75rem 6px;
  position: relative;
  width: 100%;

  ${props => props.navbar && SelectedTextNavbarStyle};
  ${props => props.open && SelectedTextOpenStyle};
  ${props => props.placeholder && SelectedTextPlaceholderStyle};
`;

const InputText = styled.span`
  height: fit-content;
`;

const Menu = styled.div`
  border: 1px solid ${c_grey_light};
  border-color: ${props =>
    props.navbar && props.optionsLength ? c_grey_light : c_grey_light};
  border-top: 1px solid ${props => (props.navbar ? "inherit" : "none")};
  height: fit-content;
  max-height: 320px;
  min-width: 6rem;
  overflow-y: auto;
  position: absolute;
  top: 41px;
  width: calc(100% - 2px);
  z-index: 10;
`;

export default ({
  disabled,
  fieldName,
  label,
  messages,
  multipleChoice,
  name,
  navbar,
  onChange,
  onOpen,
  open,
  options,
  placeholder,
  required,
  small,
  selected,
  styleProperties,
  title
}) => {
  const optionName = fieldName || "name";
  let optionsList = [];

  /* Distinguishes an object list from a string or number list */
  if (options.length && typeof options[0] === "object") {
    optionsList = options;
  }

  /* Sets string and number lists into an object list */
  if (
    options.length &&
    (typeof options[0] === "string" || typeof options[0] === "number")
  ) {
    optionsList = options.map(option => ({
      label: option,
      name: option
    }));
  }

  return (
    <Root disabled={disabled} {...styleProperties} navbar={navbar}>
      {label && <ComponentLabel required={required}>{label}</ComponentLabel>}
      <Input className="input" small={small}>
        <SelectedText
          className="selectedText"
          navbar={navbar}
          onClick={() =>
            !disabled &&
            onOpen({
              name,
              open: !open
            })
          }
          open={open}
          placeholder={placeholder}
        >
          <InputText>
            {getSelectedText({
              list: optionsList,
              multipleChoice,
              navbar,
              optionName,
              placeholder,
              selected,
              title
            })}
          </InputText>
          <ArrowDropDown />
        </SelectedText>
        {open && (
          <Menu
            className="menu"
            optionsLength={optionsList.length}
            navbar={navbar}
          >
            {getMenuItems({
              list: optionsList,
              multipleChoice,
              name,
              navbar,
              onChange,
              optionName,
              selected
            })}
          </Menu>
        )}
      </Input>
      {messages &&
        messages.length &&
        messages.map((message, index) => (
          <ComponentMessage key={index} message={message} />
        ))}
    </Root>
  );
};
