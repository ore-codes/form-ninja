import userEvent, { UserEvent } from '@testing-library/user-event';
import { LoginForm } from '@/chunks/login-form/LoginForm';
import { render, screen } from '@/config/test-utils';

describe('<LoginForm/>', () => {
  let emailInput: HTMLInputElement;
  let button: HTMLButtonElement;
  let user: UserEvent;

  const setup = async () => {
    render(<LoginForm />);
    emailInput = screen.getByRole('textbox', { name: /email/i });
    button = screen.getByRole('button', { name: /submit/i });
    user = userEvent.setup();
  };

  beforeEach(() => setup());

  it('should accept input', async () => {
    await user.type(emailInput, 'hello');
    expect(emailInput).toHaveValue('hello');
  });

  it('is required', async () => {
    await user.click(button);
    expect(screen.getByText('Invalid Email')).toBeInTheDocument();
  });

  it('validates email', async () => {
    await user.type(emailInput, 'hello');
    await user.click(button);
    expect(screen.getByText('Invalid Email')).toBeInTheDocument();
  });

  it('removes invalid error message when user enters new valid email', async () => {
    await user.type(emailInput, 'hello');
    await user.click(button);
    expect(screen.getByText('Invalid Email')).toBeInTheDocument();

    await user.type(emailInput, '@gmail.com');
    expect(screen.queryByText('Invalid Email')).not.toBeInTheDocument();
  });
});
