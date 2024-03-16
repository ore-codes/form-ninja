import { Badge, Button, Card, Flex, TextInput } from '@mantine/core';
import { FormFieldProps } from './FormField.types';
import useFormField from './useFormField';

export default function FormField(props: FormFieldProps) {
  const h = useFormField(props);

  return (
    <Card padding="lg" radius="md" withBorder>
      <Card.Section withBorder p={16}>
        <Flex justify="space-between" align="center">
          <Badge>{props.fieldType}</Badge>
          <Button variant="transparent" c="violet.7" onClick={h.onDelete}>
            Delete
          </Button>
        </Flex>
      </Card.Section>
      <Card.Section p={16}>
        <TextInput value={props.label} onChange={(e) => h.onChangeLabel(e.target.value)} />
      </Card.Section>
    </Card>
  );
}
