// import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { darkTheme } from '../styles/themes/dark';
// import { lightTheme } from '../styles/themes/light';
// import { GlobalStyle } from '../styles/global';
// import '../styles/responsividade.css';

// import { Header } from '../components/Header';
// import { Presentation } from '../components/Presentation';
// import { AboutMe } from '../components/AboutMe';
// import { Projetos } from '../components/Projetos';
// import { Habilidades } from '../components/Habilidades';
// import { Experiencias } from '../components/Experiencias';
// import { Certificados } from '../components/Certifcados';
// import { Footer } from '../components/Footer';
// import { ThemeToggleButton } from '../components/ThemeToggleButton';

// export default function App({ Component, pageProps }) {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   // Carrega o tema salvo no localStorage ao iniciar
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'light') {
//       setIsDarkMode(false);
//     }
//   }, []);

//   // Atualiza o localStorage sempre que o tema mudar
//   useEffect(() => {
//     localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
//   }, [isDarkMode]);

//   const toggleTheme = () => setIsDarkMode(prev => !prev);

//   return (
//     <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
//       <GlobalStyle />
//       <Header />
//       <ThemeToggleButton onClick={toggleTheme}>
//         Alternar para {isDarkMode ? 'Claro 🌞' : 'Escuro 🌙'}
//       </ThemeToggleButton>
//       <Presentation />
//       <AboutMe />
//       <Projetos />
//       <Habilidades />
//       <Experiencias />
//       <Certificados />
//       <Footer />
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// src/pages/_app.tsx


import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';
import { GlobalStyle } from '../styles/global';
import '../styles/responsividade.css';

import { Header } from '../components/Header';
import { Presentation } from '../components/Presentation';
import { SobreMim } from '../components/SobreMim';
import { Habilidades } from '../components/Habilidades';
import { Experiencias } from '../components/Experiencias';
import { Certificados } from '../components/Certifcados';
import { Footer } from '../components/Footer';
import { Projetos } from '../components/Projetos';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Carrega o tema salvo no localStorage ao iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
    }
  }, []);

  // Atualiza o localStorage sempre que o tema mudar
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme }>
      <GlobalStyle />
      <Header />
      <Presentation />
      <SobreMim />
      <Projetos />
      <Habilidades />
      <Experiencias />
      <Certificados />
      <Footer />
      <Component { ...pageProps } />
    </ThemeProvider>
  );

}

export default appWithTranslation(MyApp, nextI18NextConfig);