import { Anchor, Text, Title } from '@mantine/core';

interface Props {
  searchParams: {
    form?: string;
  };
}

export default function Page(props: Props) {
  const formId = props.searchParams.form;

  return (
    <main>
      <Title order={3}>Success</Title>
      <Text my={16}>
        Your form has been created successfully and it is accessible via this{' '}
        <Anchor href={`/fill-form/${formId}`}>form link</Anchor>
      </Text>
    </main>
  );
}
