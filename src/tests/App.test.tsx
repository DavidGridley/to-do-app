import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App.tsx';

describe('App', () => {

  it('adds an item to the to do list', () => {
    render(<App />);

    const toDoInput = screen.getByTestId('add-item-input');
    const addButton = screen.getByTestId('add-item-button');

    fireEvent.change(toDoInput, { target: { value: "Make lunch" } });
    fireEvent.click(addButton);

    const toDoList = screen.getAllByRole('listitem');

    expect(toDoList).toHaveLength(1)
  });

});