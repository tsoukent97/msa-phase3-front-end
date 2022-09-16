import DogCard from '../Components/Cards';
import { render, screen, cleanup } from '@testing-library/react';

test('Dogcard renders on screen', () => {
    render(<DogCard/>);
    const cardElement = screen.getByTestId('card-1');
    expect(cardElement).toBeInTheDocument();
})