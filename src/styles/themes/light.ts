// src/styles/themes/light.ts
import {createGlobalStyle} from 'styled-components'

export const lightTheme = createGlobalStyle`
  /* cores */
:root{
    /* modo dark */
--background-containers: rgba(35, 35, 35, 0.6);
--background: #000111;
--text-night:#fffeee;



--text-day:#333333;
--background-day:#20B2AA;
--background-containers-day: #ebebeb;
--red: #E62E4D;

--blue: #5429cc;
--blue-padrao: #5882fa;
--blue-light: #6933ff;
--text-title: #363f5f;
--text-body: #969cb3;
--shape: #ffffff;
--green:#33CC95;
}
background-color: var(--background-containers-day);
color: var(--text-day);
`
;

