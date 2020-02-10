import { Link } from "react-router-dom";
import React from "react";
import styled, { css } from "styled-components";

import { c_grey_light, c_off_white } from "../../../../constants/styles/colors";
import Checkbox from "../../Checkbox/Checkbox";

const MenuItemActiveStyle = css`
  background-color: ${c_grey_light};
  font-weight: bold;
`;

const MenuItemNavbarStyle = css`
  background-color: white;
  color: #302d2c !important;

  &:hover {
    background-color: #e4d1a6;
  }
`;

const MenuItem = styled.div`
  background-color: white;
  box-sizing: border-box;
  opacity: 1;
  padding: 0.5rem 0.75rem;
  width: 100%;

  input {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${c_off_white};
  }

  ${props => props.active && MenuItemActiveStyle};
  ${props => props.navbar && MenuItemNavbarStyle};
`;

export default ({
  list,
  multipleChoice,
  name,
  navbar,
  onChange,
  optionName,
  selected
}) =>
  list.map((option, index) => {
    const getActive = () => {
      if (multipleChoice) {
        return selected && selected.indexOf(option[optionName]) > -1;
      }
      return selected === option[optionName];
    };

    const baseProperties = {
      active: getActive(),
      key: index,
      navbar
    };

    if (option.type === "link") {
      return (
        <Link {...baseProperties} to={option.link}>
          <MenuItem {...baseProperties}>{option.label}</MenuItem>
        </Link>
      );
    }

    if (option.type === "action") {
      return (
        <MenuItem {...baseProperties} onClick={() => option.callback()}>
          {option.label}
        </MenuItem>
      );
    }

    return (
      <MenuItem
        key={index}
        onClick={() =>
          onChange({
            multipleChoice,
            name,
            value: option[optionName]
          })
        }
      >
        {multipleChoice && (
          <Checkbox
            checked={selected && selected.indexOf(option[optionName]) > -1}
            small
          />
        )}
        {option.label}
      </MenuItem>
    );
  });
