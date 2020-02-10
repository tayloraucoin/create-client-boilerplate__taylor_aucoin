import { css } from "styled-components";

export const f_centered = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const f_full_width = css`
  width: 100%;
`;

export const f_half_width = css`
  margin-right: 2%;
  width: 49%;
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

export const f_margin_right = css`
  margin-right: 1rem;
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

export const f_third_width = css`
  margin-right: 2%;
  width: 32%;
`;

export const f_space_between = css`
  display: flex;
  justify-content: space-between;
`;

export const FormatStyling = css`
  ${props => props.centered && f_centered};
  ${props => props.fullSize && f_full_width};
  ${props => props.half && f_half_width};
  ${props => props.largeWidth && f_large_width};
  ${props => props.marginBottom && f_margin_bottom};
  ${props => props.marginBuffer && f_margin_buffer};
  ${props => props.marginRight && f_margin_right};
  ${props => props.marginTop && f_margin_top};
  ${props => props.lastBottom && f_last_bottom};
  ${props => props.lastRight && f_last_right};
  ${props => props.spaceBetween && f_space_between};
`;
