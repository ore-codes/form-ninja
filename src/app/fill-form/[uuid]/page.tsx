import { Title } from '@mantine/core';
import { supabase } from '@/config/supabase';
import Error from '@/fragments/error/Error';
import ViewForm from '@/fragments/view-form/ViewForm';
import { FormRecord, ViewFormProvider } from '@/fragments/view-form/ViewFormContext';

interface Props {
  params: {
    uuid: string;
  };
}

export default async function Page(props: Props) {
  const formId = props.params.uuid;
  const res = await supabase.from('forms').select().eq('uuid', formId);

  if (res.error) return <Error />;

  const [form] = res.data as FormRecord[];

  return (
    <main>
      <Title order={2}>{form.title}</Title>
      <ViewFormProvider value={form}>
        <ViewForm />
      </ViewFormProvider>
    </main>
  );
}
