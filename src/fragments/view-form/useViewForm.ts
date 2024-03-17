import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Json } from '@/types/database.types';
import { supabase } from '@/config/supabase';
import { ViewFormContext } from './ViewFormContext';

export default function useViewForm() {
  const { fields, uuid } = useContext(ViewFormContext);
  const form = useForm();
  const router = useRouter();

  const onSubmit = form.onSubmit(async (values) => {
    const res = await supabase
      .from('responses')
      .insert({
        data: values as Json,
        form_id: uuid,
      })
      .select('id');

    if (res.error) {
      toast.error('An error occurred. Please try again');
    } else {
      router.replace('/response-success');
    }
  });

  return { fields, form, onSubmit };
}
