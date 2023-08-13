import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App.tsx';

beforeEach(() => {
  window.localStorage.clear();
  render(<App />);
});

const addItem = (input: HTMLElement, value: string) => {
  fireEvent.change(input, { target: { value } });
}

test('adds an item to the to do list', () => {
  const toDoInput = screen.getByTestId('add-item-input');
  const addButton = screen.getByTestId('add-item-button');

  addItem(toDoInput, 'Make lunch');
  fireEvent.click(addButton);

  const toDoList = screen.getAllByRole('listitem');

  expect(toDoList).toHaveLength(1);
});

test('adds multiple item to the to do list', () => {
  const toDoInput = screen.getByTestId('add-item-input');
  const addButton = screen.getByTestId('add-item-button');

  addItem(toDoInput, 'Make lunch');
  fireEvent.click(addButton);

  addItem(toDoInput, 'Go for a walk');
  fireEvent.click(addButton);

  addItem(toDoInput, 'Finish project');
  fireEvent.click(addButton);

  const toDoList = screen.getAllByRole('listitem');

  expect(toDoList).toHaveLength(3);
});

test('mark items as checked when checkbox is checked', () => {
  const toDoInput = screen.getByTestId('add-item-input');
  const addButton = screen.getByTestId('add-item-button');

  addItem(toDoInput, 'Make lunch');
  fireEvent.click(addButton);

  const toDoList = screen.getAllByRole('listitem');

  expect(toDoList).toHaveLength(1);

  const listItemCheckbox = screen.getByTestId('list-item-checkbox') as HTMLInputElement;

  expect(listItemCheckbox.checked).toBe(false);

  fireEvent.click(listItemCheckbox);

  expect(listItemCheckbox.checked).toBe(true);

});
