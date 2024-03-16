import { Title } from '@mantine/core';
import BuildForm from '@/fragments/build-form/BuildForm';
import { FieldsProvider } from '@/fragments/build-form/FieldsContext';

export default function Page() {
  return (
    <main>
      <Title order={3}>Form Builder</Title>
      <FieldsProvider>
        <BuildForm />
      </FieldsProvider>
    </main>
  );
}
