'use client';

import { Box, Button, NumberInput, Rating, Stack, Text, TextInput } from '@mantine/core';
import { FieldType } from '@/types/forms.types';
import useViewForm from './useViewForm';

export default function ViewForm() {
  const h = useViewForm();

  return (
    <form onSubmit={h.onSubmit}>
      <Stack gap="md" maw={480} mx="auto">
        <Text>Kindly fill form appropriately</Text>
        {h.fields.map((field, index) => (
          <Stack key={index}>
            {field.type === FieldType.Text && (
              <TextInput label={field.label} required {...h.form.getInputProps(field.label)} />
            )}
            {field.type === FieldType.Money && (
              <NumberInput
                label={field.label}
                thousandSeparator=","
                required
                {...h.form.getInputProps(field.label)}
              />
            )}
            {field.type === FieldType.Rating && (
              <Box>
                <Text size="sm">{field.label}</Text>
                <Rating {...h.form.getInputProps(field.label)} />
              </Box>
            )}
          </Stack>
        ))}
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
