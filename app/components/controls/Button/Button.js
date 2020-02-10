import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import React from "react";

import { c_grey_dark } from "../../../constants/styles/colors";
import { t_font_family_title } from "../../../constants/styles/typography";

export default ({
  children,
  classes,
  color,
  disabled,
  fontColor,
  link,
  normal,
  onClick,
  path,
  small,
  styles,
  text
}) => {
  const defaultStyle = {
    backgroundColor: color || c_grey_dark,
    color: fontColor || "white",
    fontFamily: t_font_family_title,
    letterSpacing: "2px",
    paddingLeft: "16px",
    paddingRight: "16px",
    ...styles
  };

  let style = small
    ? {
        ...defaultStyle,
        fontSize: "12px",
        paddingLeft: "12px",
        paddingRight: "12px"
      }
    : defaultStyle;

  if (normal) {
    style = {
      ...style,
      width: "fit-content"
    };
  }

  const button = (
    <Button
      className={classes && classes.root ? classes.root : ""}
      disabled={disabled}
      onClick={() => onClick()}
      style={style}
    >
      {text}
      {children}
    </Button>
  );

  if (link) {
    return <Link to={path}>{button}</Link>;
  }

  return button;
};
