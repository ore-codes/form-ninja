import { User } from '@supabase/gotrue-js';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { supabase } from '@/config/supabase';
import { KEY_USER } from '@/constants/local-storage';
import { QUERY_USER } from '@/constants/react-query';
import { readLocal, writeLocal } from '@/lib/storage';

const useUser = () => {
  const router = useRouter();

  return useQuery<User | null>({
    queryKey: [QUERY_USER],
    async queryFn() {
      const { data } = await supabase.auth.refreshSession();
      const user = data.user ?? readLocal(KEY_USER);

      if (!user) router.replace('/sign-in');

      return user ? writeLocal(KEY_USER, user) : null;
    },
  });
};

export { useUser };
