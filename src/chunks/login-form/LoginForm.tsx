'use client';

import { Box, Button, Stack, Text, TextInput } from '@mantine/core';
import useLoginForm from './useLoginForm';

export function LoginForm() {
  const h = useLoginForm();

  return (
    <Box maw={340} mx="auto" mt={64}>
      <form onSubmit={h.onSubmit}>
        <Stack gap="md">
          <TextInput
            label="Enter email to continue"
            {...h.form.getInputProps('email')}
            placeholder="your-email@site.com"
          />
          <Button type="submit" disabled={h.emailSent} aria-label="submit">
            Get magic link
          </Button>
          {h.error && (
            <Text c="red.7" ta="right">
              {h.error}
            </Text>
          )}
          {h.emailSent && (
            <Text fw={500} c="green.6">
              Magic link has been sent to {h.form.values.email}
            </Text>
          )}
        </Stack>
      </form>
    </Box>
  );
}
