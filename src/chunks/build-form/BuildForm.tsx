'use client';

import { Button, Center, Flex, Stack, TextInput, Title } from '@mantine/core';
import FormField from './form-field/FormField';
import NewField from './new-field/NewField';
import useBuildForm from './useBuildForm';

export default function BuildForm() {
  const h = useBuildForm();

  return (
    <Flex gap="md" maw="75em" mx="auto" mt={16} direction={h.isLg ? 'row' : 'column'}>
      <form onSubmit={h.onSubmit} style={{ flex: 1 }}>
        <Stack gap="md" maw="40em">
          <TextInput
            label="Title"
            placeholder="Title of the form"
            {...h.form.getInputProps('title')}
          />
          {h.fields.length > 0 ? (
            <>
              <Title order={5}>Form fields</Title>
              {h.fields.map((f, index) => (
                <FormField key={index} fieldType={f.type} index={index} label={f.label} />
              ))}
            </>
          ) : (
            <Center c="gray.6" fw={500}>
              Add fields to the form before you can publish
            </Center>
          )}
          <Button
            type="submit"
            radius="xl"
            disabled={h.fields.length === 0}
            style={{ alignSelf: 'flex-end' }}
          >
            Publish
          </Button>
        </Stack>
      </form>
      <NewField />
    </Flex>
  );
}
