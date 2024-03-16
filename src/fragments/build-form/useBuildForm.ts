import { isNotEmpty, useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Json } from '@/types/database.types';
import { useUser } from '@/lib/auth';
import { QUERY_USER_FORM } from '@/constants/react-query';
import { supabase } from '@/config/supabase';
import { FieldsContext } from './FieldsContext';

export default function useBuildForm() {
  const router = useRouter();
  const { data: user } = useUser();
  const { fields } = useContext(FieldsContext);
  const isLg = useMediaQuery('(min-width: 75em)');
  const form = useForm({
    initialValues: { title: '' },
    validate: {
      title: isNotEmpty('Enter form title'),
    },
  });
  const mutation = useMutation({
    mutationKey: [QUERY_USER_FORM],
    async mutationFn(title: string) {
      const res = await supabase
        .from('forms')
        .insert({
          title,
          fields: fields as unknown as Json[],
          user_id: user!.id,
        })
        .select('uuid');

      if (res.error) {
        toast.error('An error occurred. Please try again');
      } else {
        router.replace(`/build-success?form=${res.data[0].uuid}`);
      }
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    mutation.mutate(values.title);
  });

  return { isLg, fields, form, onSubmit };
}
