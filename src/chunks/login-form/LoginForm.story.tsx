import { StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

export default {
  component: LoginForm,
};

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  render() {
    return <LoginForm />;
  },
};
