import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Experiencias } from '../src/components/Experiencias';

describe('Experiencias', () => {
    it('renderiza o título Educação e Experiências', () => {
        render(<Experiencias />);
        expect(screen.getByText(/Educação e Experiências/i)).toBeInTheDocument();
    });
});
