import { StoryObj } from '@storybook/react';
import { FieldType } from '@/types/forms.types';
import FormField from './FormField';

export default {
  component: FormField,
};

type Story = StoryObj<typeof FormField>;

export const Primary: Story = {
  args: {
    fieldType: FieldType.Text,
    label: 'Label',
    index: 0,
  },
};
