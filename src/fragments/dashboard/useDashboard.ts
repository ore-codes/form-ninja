import { useMediaQuery } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { supabase } from '@/config/supabase';
import { QUERY_FORMS } from '@/constants/react-query';
import { useUser } from '@/lib/auth';
import { FormRecord } from '@/types/forms.types';

export default function useDashboard() {
  const formsQuery = useQuery({
    queryKey: [QUERY_FORMS],
    async queryFn() {
      const { data: forms } = await supabase.from('forms').select();
      return forms as FormRecord[];
    },
  });

  const userQuery = useUser();

  const formLink = useCallback((uuid: string) => `${window.location.host}/fill-form/${uuid}`, []);

  return {
    formLink,
    forms: formsQuery.data,
    user: userQuery.data,
  };
}
