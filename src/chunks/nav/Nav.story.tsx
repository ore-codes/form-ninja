import { StoryObj } from '@storybook/react';
import { Nav } from './Nav';

export default {
  component: Nav,
};

type Story = StoryObj<typeof Nav>;

export const Primary: Story = {
  render() {
    return <Nav />;
  },
};
