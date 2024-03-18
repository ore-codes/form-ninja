import { Center, Stack, Title } from '@mantine/core';
import ExportResponses from '@/chunks/export-responses/ExportResponses';
import FormResponse from '@/chunks/form-response/FormResponse';
import { supabase } from '@/config/supabase';
import Error from '@/fragments/error/Error';

interface Props {
  params: {
    formId: string;
  };
}

export const revalidate = 60;

export default async function Page(props: Props) {
  const res = await supabase
    .from('responses')
    .select()
    .eq('form_id', props.params.formId)
    .order('created_at', { ascending: false });

  if (res.error) {
    return <Error />;
  }

  return (
    <main>
      <Stack gap="md">
        <ExportResponses data={res.data} />
        {res.data.length === 0 && (
          <Center my={32}>
            <Title c="gray.7">No responses yet</Title>
          </Center>
        )}
        {res.data.map((resp) => (
          <FormResponse key={resp.id} response={resp} />
        ))}
      </Stack>
    </main>
  );
}
