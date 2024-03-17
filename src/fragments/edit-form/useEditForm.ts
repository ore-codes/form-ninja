import { isNotEmpty, useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useImmer } from 'use-immer';
import { Lg } from '@/constants/css-breakpoints';
import { QUERY_USER_FORM } from '@/constants/react-query';
import { Json } from '@/types/database.types';
import { useUser } from '@/lib/auth';
import { supabase } from '@/config/supabase';
import { Field } from '@/types/forms.types';
import { UserFormContext } from './UserFormContext';

export default function useEditForm() {
  const router = useRouter();
  const { data: user } = useUser();
  const c = useContext(UserFormContext);
  const isLg = useMediaQuery(`(min-width: ${Lg})`);
  const [fields, updateFields] = useImmer<Field[]>([]);
  const form = useForm({
    initialValues: { title: '' },
    validate: {
      title: isNotEmpty('Enter form title'),
    },
  });

  useEffect(() => {
    if (c.form) {
      form.setFieldValue('title', c.form.title);
      updateFields(c.form.fields);
    }
  }, [c.form]);

  const mutation = useMutation({
    mutationKey: [QUERY_USER_FORM],
    async mutationFn(title: string) {
      const res = await supabase
        .from('forms')
        .update({
          title,
          fields: fields as unknown as Json[],
          user_id: user!.id,
        })
        .eq('uuid', c.form!.uuid);

      if (res.error) {
        toast.error('An error occurred. Please try again');
      } else {
        toast.success('Your form is live');
        router.replace('/');
      }
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    mutation.mutate(values.title);
  });

  return { fields, form, isLg, onSubmit, updateFields };
}
