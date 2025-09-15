// src/styles/themes/light.ts
import {createGlobalStyle} from 'styled-components'

export const lightTheme = createGlobalStyle`
  /* cores */
  :root{
    --background: #ffffff;
    --background-day: #ffffff;
    --background-containers-day: #ffffff;
    --text-day: #111111;
    --text-title: #000000;
    --text-body: #222222;
    --red: #E62E4D;
    --blue: #111111;
    --blue-padrao: #111111;
    --blue-light: #333333;
    --shape: #ffffff;
    --green: #33CC95;
  }
  background-color: var(--background-containers-day);
  color: var(--text-day);
`
;

