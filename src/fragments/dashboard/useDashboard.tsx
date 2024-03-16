import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/config/supabase';
import { QUERY_FORMS } from '@/constants/react-query';
import { useUser } from '@/lib/auth';

export default function useDashboard() {
  const formsQuery = useQuery({
    queryKey: [QUERY_FORMS],
    async queryFn() {
      const { data: forms } = await supabase.from('forms').select();
      return forms;
    },
  });

  const userQuery = useUser();

  return {
    forms: formsQuery.data,
    user: userQuery.data,
  };
}
