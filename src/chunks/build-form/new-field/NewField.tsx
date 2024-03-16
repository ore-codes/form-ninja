import { Button, Card, Stack, TextInput, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { FieldType } from '@/types/forms.types';
import useNewField from './useNewField';

export default function NewField() {
  const h = useNewField();

  return (
    <form onSubmit={h.onSubmit}>
      <Card maw="40em" padding="lg" radius="md" withBorder>
        <Stack gap="md">
          <Title order={5}>New field</Title>
          <Button.Group>
            {[FieldType.Text, FieldType.Money, FieldType.Boolean].map((fieldType) => (
              <Button
                key={fieldType}
                variant={h.selectedType === fieldType ? 'filled' : 'default'}
                onClick={() => h.setSelectedType(fieldType)}
              >
                {fieldType}
              </Button>
            ))}
          </Button.Group>
          <TextInput placeholder="Question/Label" {...h.form.getInputProps('label')} />
          <Button
            type="submit"
            style={{ alignSelf: 'center' }}
            leftSection={<IconPlus />}
            variant="transparent"
          >
            Add field
          </Button>
        </Stack>
      </Card>
    </form>
  );
}
