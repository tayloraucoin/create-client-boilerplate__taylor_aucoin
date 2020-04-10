import { Link } from "react-router-dom";
import React from "react";
import styled, { css } from "styled-components";

import { FormatStyles } from "../../../constants/styles/format";
import {
  c_brand_primary,
  c_brand_secondary,
  c_error,
  c_grey_light_very,
  c_grey_medium_dark,
  c_info,
  c_off_black,
  c_red_maroon,
  c_success,
  c_warning,
  c_white
} from "../../../constants/styles/colors";
import { t_font_family_title } from "../../../constants/styles/typography";

const linkType = css`
  text-decoration: none;
`;

const activePress = css`
  &:active {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4) inset;
  }
`;

const deleteActiveRootStyle = css`
  background-color: ${c_error};
`;

const deleteRootStyle = css`
  background-color: ${c_red_maroon};

  ${props => props.active && deleteActiveRootStyle};
`;

const infoRootStyle = css`
  background-color: ${c_info};
  color: ${c_white};

  svg {
    fill: ${c_white};
  }
`;

const lockedRootStyle = css`
  background-color: ${c_grey_light_very};
  border: 1px solid ${c_grey_medium_dark};
  color: ${c_grey_medium_dark};

  svg {
    fill: ${c_grey_medium_dark};
  }

  &:hover {
    background-color: ${c_grey_light_very};
    cursor: default;
  }
`;

const shorterRootStyle = css`
  padding: 6px 20px !important;
  min-width: 160px;
`;

const successRootStyle = css`
  background-color: ${c_success};
  color: ${c_white};

  svg {
    fill: ${c_white};
  }
`;

const warningRootStyle = css`
  background-color: ${c_warning};
  color: ${c_white};

  svg {
    fill: ${c_white};
  }
`;

const yellowRootStyle = css`
  background-color: ${c_brand_secondary};
  color: ${c_brand_primary};

  svg {
    fill: ${c_off_black};
  }
`;

const Root = styled.button`
  align-items: center;
  background-color: ${c_brand_primary};
  border-radius: 6px;
  box-sizing: border-box;
  color: ${c_white};
  display: flex;
  font-family: ${t_font_family_title};
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  letter-spacing: 1px;
  line-height: 17px;
  justify-content: center;
  min-width: 225px;
  padding: 6px 40px !important;
  width: ${props => props.fullSize && "100%"};
  width: ${props => props.small && "126px"};

  svg {
    fill: ${c_white};
    height: 18px;
    margin-left: ${props => props.iconRight && "4px"};
    margin-right: ${props => props.iconLeft && "10px"};
    width: 18px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  ${FormatStyles};

  ${props => props.shorter && shorterRootStyle};
  ${props => props.type === "danger" && deleteRootStyle};
  ${props => props.type === "delete" && deleteRootStyle};
  ${props => props.type === "info" && infoRootStyle};
  ${props => props.type === "success" && successRootStyle};
  ${props => props.type === "warning" && warningRootStyle};
  ${props => props.yellow && yellowRootStyle};
  ${props => props.yellow && yellowRootStyle};
  ${props => props.locked && lockedRootStyle};
  ${props => !props.locked && activePress};
  ${props => props.type === "link" && linkType};
`;

export default props => {
  const {
    active,
    children,
    disabled,
    iconLeft,
    iconRight,
    id,
    onClick,
    path,
    type
  } = props;

  const styleProps = {
    fullSize: props.fullSize,
    small: props.small,
    shorter: props.shorter,
    marginRight: props.marginRight,
    marginRightShort: props.marginRightShort,
    yellow: props.yellow
  };

  const baseProps = {
    ...styleProps,
    active,
    iconLeft,
    iconRight,
    id: id && `button-${id}`,
    locked: disabled,
    type
  };

  const inner = (
    <>
      {iconLeft ? iconLeft : null}
      {children}
      {iconRight ? iconRight : null}
    </>
  );

  if (type === "link") {
    return (
      <Link to={path}>
        <Root {...baseProps}>{inner}</Root>
      </Link>
    );
  }

  return (
    <Root {...baseProps} onClick={onClick}>
      {inner}
    </Root>
  );
};
