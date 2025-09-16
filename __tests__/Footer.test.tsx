
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../src/components/Footer';

// Mock do useTranslation para retornar as strings fallback
jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: (_key: string, fallback: string) => fallback,
  }),
}));

describe('Footer', () => {
  it('renderiza o texto de copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Desenvolvido por Gilberto A Leite/i)).toBeInTheDocument();
  });
  it('renderiza os ícones de redes sociais', () => {
    render(<Footer />);
    expect(screen.getByAltText(/Icone-Instagram/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Icone-Github/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Icone-LinkedIn/i)).toBeInTheDocument();
  });
});
