import { isNotEmpty, useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useUser } from '@/lib/auth';
import { FieldsContext } from './FieldsContext';
import { supabase } from '@/config/supabase';
import { Json } from '@/types/database.types';

export default function useBuildForm() {
  const { fields } = useContext(FieldsContext);
  const { data: user } = useUser();
  const router = useRouter();

  const isLg = useMediaQuery('(min-width: 75em)');

  const form = useForm({
    initialValues: { title: '' },
    validate: {
      title: isNotEmpty('Enter form title'),
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    const res = await supabase
      .from('forms')
      .insert({
        title: values.title,
        fields: fields as unknown as Json[],
        user_id: user!.id,
      })
      .select('uuid');

    if (res.error) {
      toast.error('An error occurred. Please try again');
    } else {
      router.push(`/build-success?form=${res.data[0].uuid}`);
    }
  });

  return { isLg, fields, form, onSubmit };
}
