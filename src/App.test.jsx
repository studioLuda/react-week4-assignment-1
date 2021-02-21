import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

beforeEach(() => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));
});

describe('App', () => {
  it('renders tasks', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/추가/)).not.toBeNull();
    expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
  });
});
