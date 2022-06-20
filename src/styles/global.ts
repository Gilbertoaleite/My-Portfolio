import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

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
/* fim cores */


*{
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, 
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
	box-sizing: border-box;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 2;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
scroll-behavior: smooth;

@media (max-width: 1080px){
	font-size: 93.75%;
	
}
@media (max-width: 720px){
	font-size: 87.5%;
	}
}

body, input, textarea, button{
    background: var(--background);
	color: #fffeee;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
	Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    /* overflow-x: hidden; */
    }

h1,h2,h3,h4,h5,h6,strong{
   /* font-weight:600; */
    font-weight:500;
}
h2 {
	font-size: 1.5em;
    }

button{
    cursor:pointer;
}
.botao {
	padding: 1em 2em;
	border-radius: 5px;
	text-align: center;
	background-color: var(--blue-padrao);
	width: 50%;
	color: white;
	text-decoration: none;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: space-around;
	transition: 0.3s;
}
.botao > img {
	align-items: center;
	width: 1.5em;
	margin: 0 auto;
}

.botao:hover {
	/* background-color: #5dad; */
	filter: brightness(0.8);
}

.sectOff {
	
	background: var(--background-containers);
	transition: 0.5s;
	width: 100%;
	margin: 0 auto;
}

.sectOff.background-day-gray {
	background-color: var(--background-containers-day);
	color: var(--text-day);
}

.flex-experiencia.background-day-gray {
	background-color: var(--background-containers-day);
	text-decoration: none;
}



`;