import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import SignIn from '~/pages/SignIn';

jest.mock('react-redux');

describe('Sign in page', () => {
  it('should be able to change button text based on redux loading state', () => {
    useSelector.mockImplementation(cb =>
      cb({
        auth: {
          loading: true,
        },
      })
    );
    const { getByText, debug } = render(<SignIn />);

    debug();

    expect(getByText('Carregando...')).toBeTruthy();
  });
});
