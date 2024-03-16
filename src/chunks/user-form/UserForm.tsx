import { Badge, Button, Card, CopyButton, Flex, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import useUserForm from './useUserForm';
import { UserFormProps } from './UserForm.types';

export default function UserForm(p: UserFormProps) {
  const h = useUserForm(p);

  return (
    <Card key={p.form.uuid} withBorder maw={640}>
      <Flex align="center" justify="space-between">
        <Stack>
          <Text>{p.form.title}</Text>
          <Flex gap="sm">
            <Badge>{p.form.fields.length} fields</Badge>
            <CopyButton value={h.formLink()}>
              {({ copied, copy }) => (
                <Badge
                  color={copied ? 'lime' : 'pink'}
                  onClick={copy}
                  style={{ cursor: 'pointer' }}
                  title={h.formLink()}
                >
                  {copied ? 'Copied' : 'Copy link'}
                </Badge>
              )}
            </CopyButton>
          </Flex>
        </Stack>
        <Button component={Link} href={`/edit-form/${p.form.uuid}`}>
          Edit
        </Button>
      </Flex>
    </Card>
  );
}
