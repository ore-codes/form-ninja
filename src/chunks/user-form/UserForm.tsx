import { Badge, Button, Card, CopyButton, Flex, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import styles from './UserForm.module.css';
import { UserFormProps } from './UserForm.types';
import useUserForm from './useUserForm';

export default function UserForm(p: UserFormProps) {
  const h = useUserForm(p);

  return (
    <Card key={p.form.uuid} withBorder miw={240}>
      <Flex className={styles.container}>
        <Stack>
          <Text>{p.form.title}</Text>
          <Flex gap="sm" wrap="wrap">
            <Badge>{p.form.fields.length} fields</Badge>
            <Badge
              component={Link}
              href={`/responses/${p.form.uuid}`}
              style={{ cursor: 'pointer' }}
            >
              {p.form.responses?.length} responses
            </Badge>
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
        <Button
          className={styles.button}
          component={Link}
          radius="xl"
          href={`/edit-form/${p.form.uuid}`}
          variant={h.isLg ? 'transparent' : 'primary'}
        >
          Edit
        </Button>
      </Flex>
    </Card>
  );
}
