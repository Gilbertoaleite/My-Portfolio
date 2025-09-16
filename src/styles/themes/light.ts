// src/styles/themes/light.ts
import {createGlobalStyle} from 'styled-components'

export const lightTheme = createGlobalStyle`
  /* cores */
  :root{
    --background: #ffffff;
    --background-day: #ffffff;
    --background-containers-day: #ffffff;
    --text-day: #fffeee;
    --text-title: #e0e0e0;
    --text-body: #b0b0b0;
    --red: #E62E4D;
    --blue: #5429cc;
    --blue-padrao: #5882fa;
    --blue-light: #6933ff;
    --shape: #1f1f1f;
    --green: #33CC95;
  }
  background-color: var(--background-containers-day);
  color: var(--text-day);
`
;

