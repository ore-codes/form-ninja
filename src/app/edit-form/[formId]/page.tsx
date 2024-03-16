import { Title } from '@mantine/core';
import EditForm from '@/fragments/edit-form/EditForm';
import { UserFormProvider } from '@/fragments/edit-form/UserFormContext';

interface Props {
  params: {
    formId: string;
  };
}

export default function Page(props: Props) {
  return (
    <main>
      <Title order={3}>Form Builder</Title>
      <UserFormProvider formId={props.params.formId}>
        <EditForm />
      </UserFormProvider>
    </main>
  );
}
