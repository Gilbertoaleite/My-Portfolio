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
  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 100%;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h2 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  ol, ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Botão personalizado */
  .botao {
    padding: 1em 2em;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bluePadrao};
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    text-decoration: none;
    transition: 0.3s;
  }

  .botao > img {
    width: 1.5em;
    margin: 0 auto;
  }

  .botao:hover {
    filter: brightness(0.8);
  }

  /* Containers */
  .sectOff {
    background: ${({ theme }) => theme.backgroundContainers};
    transition: 0.5s;
    width: 100%;
    margin: 0 auto;
  }

  .sectOff.background-day-gray {
    background-color: ${({ theme }) => theme.backgroundContainersDay};
    color: ${({ theme }) => theme.textDay};
  }

  .flex-experiencia.background-day-gray {
    background-color: ${({ theme }) => theme.backgroundContainersDay};
    text-decoration: none;
  }

  /* Responsividade */
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;