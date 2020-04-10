import { css } from "styled-components";

import { c_error, c_success } from "./colors";

export const f_align_top = css`
  align-items: flex-start;
`;

export const f_centered = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const f_content_right = css`
  align-items: flex-end;
  justify-content: flex-end;
`;

export const f_flex_start = css`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
`;

export const f_full_width = css`
  width: 100%;
`;

export const f_half_width = css`
  margin-right: 2%;
  width: 49%;
`;

export const f_highlighted_green = css`
  box-shadow: 0 0 2.5px ${c_success};
`;

export const f_highlighted_red = css`
  box-shadow: 0 0 6px ${c_error};
`;

export const f_large_width = css`
  width: 32rem;
`;

export const f_margin_bottom = css`
  margin-bottom: 1rem;
`;

export const f_margin_buffer = css`
  margin: 4px;
`;

export const f_margin_offset_left = css`
  margin-left: -4px;
`;

export const f_margin_skinny = css`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const f_margin_right = css`
  margin-right: 1rem;
`;

export const f_margin_right_double = css`
  margin-right: 2rem;
`;

export const f_margin_right_short = css`
  margin-right: 0.5rem;
`;

export const f_margin_top = css`
  margin-top: 1rem;
`;

export const f_last_bottom = css`
  margin-bottom: 0;
`;

export const f_last_right = css`
  margin-right: 0;
`;

export const f_skinny_width = css`
  width: 8rem;
`;

export const f_small_width = css`
  width: 6rem;
`;

export const f_third_width = css`
  margin-right: 2%;
  width: 32%;
`;

export const f_space_between = css`
  display: flex;
  justify-content: space-between;
`;

export const FormatStyles = css`
  ${props => props.alignTop && f_align_top};
  ${props => props.centered && f_centered};
  ${props => props.contentRight && f_content_right};
  ${props => props.flexStart && f_flex_start};
  ${props => props.fullSize && f_full_width};
  ${props => props.half && f_half_width};
  ${props => props.highlighted === "green" && f_highlighted_green};
  ${props => props.highlighted === "red" && f_highlighted_red};
  ${props => props.largeWidth && f_large_width};
  ${props => props.marginBottom && f_margin_bottom};
  ${props => props.marginBuffer && f_margin_buffer};
  ${props => props.marginSkinny && f_margin_skinny};
  ${props => props.marginRight && f_margin_right};
  ${props => props.marginRightDouble && f_margin_right_double};
  ${props => props.marginRightShort && f_margin_right_short};
  ${props => props.marginTop && f_margin_top};
  ${props => props.lastBottom && f_last_bottom};
  ${props => props.lastRight && f_last_right};
  ${props => props.skinny && f_skinny_width};
  ${props => props.small && f_small_width};
  ${props => props.spaceBetween && f_space_between};
`;
