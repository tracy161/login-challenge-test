import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LogIn } from '../../containers/login/Login';

const onSubmitMock = jest.fn();
const username = 'testuser';
const password = 'password';

describe('Login Component render', () => {
  test('login renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogIn />, div);
  });
});

test('has required fields validation', async () => {
  render(<LogIn />);

  const submitButton = screen.queryByLabelText('button');
  userEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.queryByText('* Username is required')).toBeInTheDocument();
    expect(screen.queryByText('* Password is required')).toBeInTheDocument();
  });
});

test('onSubmit is called when all fields pass validation', async () => {
  render(<LogIn onSubmit={onSubmitMock(username, password)} />);
  const userInput = screen.queryByLabelText('username');
  userEvent.type(userInput, 'testuser');

  const userPassword = screen.queryByLabelText('password');
  userEvent.type(userPassword, 'password');

  const submitButton = screen.queryByLabelText('button');
  userEvent.click(submitButton);

  await waitFor(() => {
    expect(onSubmitMock).toHaveBeenCalled();
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith('testuser', 'password');
  });
});


