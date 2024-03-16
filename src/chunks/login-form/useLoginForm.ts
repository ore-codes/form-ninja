import { isEmail, useForm } from '@mantine/form';
import { useState } from 'react';
import { supabase } from '@/config/supabase';

export default function useLoginForm() {
  const [error, setError] = useState<string | null>();
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm({
    initialValues: { email: '' },
    validate: {
      email: isEmail('Invalid Email'),
    },
  });

  const onSubmit = form.onSubmit(async ({ email }) => {
    const res = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.host,
      },
    });

    setError(res.error?.message);

    if (res.data) {
      setEmailSent(true);
      setError(null);
    }
  });

  return { emailSent, error, form, onSubmit };
}
