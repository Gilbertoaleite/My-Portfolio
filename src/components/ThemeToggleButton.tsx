// src/components/ThemeToggleButton.tsx
import styled from 'styled-components';

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.bluePadrao};
  color: white;
  border: none;
  padding: 0.8em 1.2em;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;