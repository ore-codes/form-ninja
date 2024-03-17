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
    enabled: !!userQuery.data,
    queryKey: [QUERY_FORMS],
    async queryFn() {
      const { data: forms } = await supabase
        .from('forms')
        .select('*, responses(id)')
        .eq('user_id', userQuery.data!.id)
        .order('created_at', { ascending: false });
      return forms as FormRecord[];
    },
  });
  const isLg = useMediaQuery(`(min-width: ${Lg})`);
  const formLink = useCallback((uuid: string) => `${window.location.host}/fill-form/${uuid}`, []);

  return {
    formLink,
    forms: formsQuery.data,
    loading: formsQuery.isPending,
    isLg,
    user: userQuery.data,
  };
}
