import { createGlobalStyle } from 'styled-components';

import { c_black } from './colors';
import {
  t_font_family,
  t_font_family_title,
  t_letter_spacing,
  t_letter_spacing_title
} from './typography';

export const CssBody = createGlobalStyle`
  html {
    margin: 0;
  }

  body {
    box-sizing: border-box;
    color: ${c_black};
    font-family: ${t_font_family};
    letter-spacing: ${t_letter_spacing};
    margin: 0;
    padding: 0;

    a,
    button,
    input,
    textarea {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      &:focus { outline: none; }
    }

    svg {
      fill: currentColor;
      vertical-align: middle;
    }

    em, i { font-style: italic; }

    strong, b { font-weight: 700; }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${t_font_family_title};
      letter-spacing: ${t_letter_spacing_title};
    }

    #navbar {
      // font-family: Woodland;
      font-family: Alice;
      letter-spacing: 0.5px;
    }

    .title {
      font-family: ${t_font_family_title};
      letter-spacing: ${t_letter_spacing_title};
    }
  }
`;
