import { useMediaQuery } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { Lg } from '@/constants/css-breakpoints';
import { supabase } from '@/config/supabase';
import { QUERY_FORMS } from '@/constants/react-query';
import { useUser } from '@/lib/auth';
import { FormRecord } from '@/types/forms.types';

export default function useDashboard() {
  const userQuery = useUser();
  const formsQuery = useQuery({
    queryKey: [QUERY_FORMS],
    async queryFn() {
      const { data: forms } = await supabase
        .from('forms')
        .select('*, responses(id)')
        .order('created_at', { ascending: false });
      return forms as FormRecord[];
    },
  });
  const isLg = useMediaQuery(`(min-width: ${Lg})`);
  const formLink = useCallback((uuid: string) => `${window.location.host}/fill-form/${uuid}`, []);

  return {
    formLink,
    forms: formsQuery.data,
    isLg,
    user: userQuery.data,
  };
}
