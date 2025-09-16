import styled from 'styled-components';

export const Container = styled.div`
  .flags-desktop {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }
  .flags-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .flags-desktop {
      display: inline-flex;
      align-items: center;
    }
    .flags-mobile {
      display: inline-flex;
      align-items: center;
    }
  }
  .header {
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  padding: 1rem 1rem 1.5rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    right: 0;
    z-index: 1000;
    background: var(--background-containers);
    transition: height 0.2s, padding 0.2s, max-width 0.2s;
  }

  @media (max-width: 1200px) {
    .header {
      max-width: 100vw;
    }
  }

  #nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1.5rem;
    transition: gap 0.2s;
  }

  .nav-burger {
    display: flex;
    align-items: center;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  #menu {
    gap: 1rem;
    display: flex;
    transition: 0.2s;
    margin: 2em 2em 2em 0;
  }
  #menu a {
    display: block;
    padding: 0.7rem;
    text-decoration: none;
    margin-bottom: 4.5rem;
  }

  .nav-li {
    font-size: 1em;
    transition: 0.9s;
    color: var(--shape);
    margin-bottom: 1.5em;
    font-weight: semibold;
    text-decoration: none;
    &:hover {
      border-bottom: solid 0.5px var(--blue-padrao);
    }
    .text-day {
      color: var(--text-day);
    }
  }

  .language-menu-btn {
    margin-left: 2rem;
    margin-right: 1rem;
    padding: 6px 18px;
    border-radius: 20px;
    border: 1px solid #0070f3;
    background: var(--background-containers);
    color: #0070f3;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    outline: none;
    display: flex;
    align-items: center;
    gap: 6px;
    height: 40px;
    box-sizing: border-box;
    &:focus {
      border-color: #005bb5;
      outline: 2px solid #005bb5;
    }
    svg, span {
      display: flex;
      align-items: center;
    }
  }

  .switch {
    width: 60px;
    height: 34px;
    margin-right: 2em;
    position: relative;
    display: inline-block;
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
    .slider {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
      transition: 0.4s;
      position: absolute;
      -webkit-transition: 0.4s;
      background: var(--background);
      &.round {
        border-radius: 34px;
        &:before {
          border-radius: 50%;
        }
      }
      &:before {
        left: 4px;
        content: '';
        bottom: 4px;
        width: 28px;
        height: 28px;
        transition: 0.4s;
        position: absolute;
        -webkit-transition: 0.4s;
        box-shadow: 0 0 20px yellow;
        background: rgb(255, 255, 255);
        background-image: url('assets/img/moon-regular.svg');
        background-size: 18px 18px;
        background-repeat: no-repeat;
        background-position: center;
        /* Lua amarela por padrão (modo escuro) */
        filter: sepia(1) hue-rotate(25deg) saturate(8) brightness(1.1);
      }
    }
    input:checked + .slider {
      background-color: var(--background-day);
    }
    input:checked + .slider:before {
  background: yellow;
  filter: none;
  transform: translateX(20px);
  -ms-transform: translateX(20px);
  -webkit-transform: translateX(19px);
  background-image: url('../assets/img/sun-regular.svg');
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: center;
    }
  }

  /* Responsividade para navbar */
  @media (max-width: 900px) {
    .header {
      padding: 0.5rem 0.5rem 1rem 0.5rem;
      height: 60px;
    }
    #nav-menu {
      gap: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    .header {
      justify-content: space-between;
      padding: 0.5rem 0.5rem 1rem 0.5rem;
      height: 56px;
    }
    #nav-menu {
      width: 100%;
      justify-content: space-between;
      gap: 0.2rem;
    }
    .nav-actions {
      gap: 0.2rem;
    }
    #menu {
      display: none !important;
    }
    /* O Burger já é exibido via styled-component próprio */
  }

  @media (max-width: 500px) {
    .header {
      height: 48px;
      padding: 0.2rem 0.2rem 0.7rem 0.2rem;
    }
    #nav-menu {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.1rem;
    }
    .nav-actions {
      gap: 0.1rem;
    }
    .language-menu-btn {
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      padding: 4px 8px;
      font-size: 0.9em;
      height: 28px;
    }
    .switch {
      width: 36px;
      height: 20px;
      margin-right: 0.3em;
    }
        .switch .slider:before {
          width: 16px;
          height: 16px;
          background-size: 12px 12px;
        }
        /* Garante que os elementos não fiquem empilhados verticalmente */
        #nav-menu > * {
          margin-bottom: 0 !important;
        }
      }
  `;