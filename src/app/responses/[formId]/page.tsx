import FormResponse from '@/chunks/form-response/FormResponse';
import { supabase } from '@/config/supabase';
import Error from '@/fragments/error/Error';

interface Props {
  params: {
    formId: string;
  };
}

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
      {res.data.map((resp) => (
        <FormResponse key={resp.id} response={resp} />
      ))}
    </main>
  );
}
