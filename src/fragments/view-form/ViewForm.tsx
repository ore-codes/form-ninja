'use client';

import { Box, NumberInput, Rating, Stack, Text, TextInput } from '@mantine/core';
import { FieldType } from '@/types/forms.types';
import useViewForm from './useViewForm';

export default function ViewForm() {
  const h = useViewForm();

  return (
    <Stack gap="md">
      <Text>Kindly fill form appropriately</Text>
      {h.form.fields.map((field, index) => (
        <Stack key={index}>
          {field.type === FieldType.Text && <TextInput label={field.label} />}
          {field.type === FieldType.Money && (
            <NumberInput label={field.label} thousandSeparator="," />
          )}
          {field.type === FieldType.Rating && (
            <Box>
              <Text>{field.label}</Text>
              <Rating />
            </Box>
          )}
        </Stack>
      ))}
    </Stack>
  );
}
