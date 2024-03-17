import { Badge, Button, Card, Flex, TextInput } from '@mantine/core';
import { FormFieldProps } from './FormField.types';
import useFormField from './useFormField';

export default function FormField(props: FormFieldProps) {
  const h = useFormField(props);

  return (
    <Card padding="lg" radius="md" withBorder>
      <Card.Section withBorder p={16}>
        <Flex justify="space-between" align="center">
          <Badge data-testid="fieldType">{props.fieldType}</Badge>
          <Button variant="transparent" onClick={h.onDelete}>
            Delete
          </Button>
        </Flex>
      </Card.Section>
      <Card.Section p={16}>
        <TextInput
          label="Edit label"
          value={props.label}
          onChange={(e) => h.onChangeLabel(e.target.value)}
        />
      </Card.Section>
    </Card>
  );
}
