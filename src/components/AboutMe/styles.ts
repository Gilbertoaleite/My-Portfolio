import styled from 'styled-components';

export const Container = styled.div`
  .botoes-sobre {
    width: 100%;
    max-width: 400px;
    display: flex;
    gap: 0.7em;
    margin: 2rem auto;
    justify-content: center;
  }
  .botoes-sobre .botao {
    width: 48%;
    min-width: 90px;
    max-width: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.12em;
  text-align: left;
    font-size: 1em;
  padding: 0.4em 1em;
    border-radius: 8px;
    background: var(--background-containers, #f5f5f5);
    color: var(--text, #222);
    border: 1px solid var(--border, #e0e0e0);
    transition: background 0.2s, color 0.2s, border 0.2s;
    cursor: pointer;
    text-align: center;
  }
  .botoes-sobre .botao:hover {
    background: var(--blue-padrao, #0070f3);
    color: #fff;
    border: 1px solid var(--blue-padrao, #0070f3);
  }
  .botao img {
    width: 18px !important;
    height: 18px !important;
    min-width: 12px;
    min-height: 12px;
    max-width: 22px;
    max-height: 22px;
    object-fit: contain;
  }
  @media (max-width: 700px) {
    .botoes-sobre {
      gap: 0.5em;
      margin: 1.5rem 0;
    }
    .botoes-sobre .botao {
      width: 48%;
      min-width: 70px;
      max-width: 110px;
      font-size: 0.95em;
      padding: 0.3em 0.7em;
    }
  }
  @media (max-width: 500px) {
    .botao img {
      width: 13px !important;
      height: 13px !important;
      min-width: 8px;
      min-height: 8px;
      max-width: 15px;
      max-height: 15px;
    }
    .botao {
      font-size: 0.92em;
      padding: 0.15em 0.3em;
      min-width: 50px;
      max-width: 70px;
    }
  }
`;
