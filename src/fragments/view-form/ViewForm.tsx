'use client';

import { Box, Text, TextInput } from '@mantine/core';
import useViewForm from '@/fragments/view-form/useViewForm';

export default function ViewForm() {
  const h = useViewForm();

  return (
    <Box>
      <Text>Kindly fill form appropriately</Text>
      {h.form.fields.map((field, index) => (
        <TextInput key={index} label={field.label} />
      ))}
    </Box>
  );
}
