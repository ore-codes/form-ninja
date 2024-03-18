'use client';

import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { createContext } from 'react';
import { supabase } from '@/config/supabase';
import { QUERY_USER_FORM } from '@/constants/react-query';
import { FormRecord } from '@/types/forms.types';
import { ContextProps, ContextReturn } from './EditForm.types';

const UserFormContext = createContext({} as ContextReturn);

const UserFormProvider = (props: ContextProps) => {
  const formQuery = useQuery<FormRecord>({
    queryKey: [QUERY_USER_FORM],
    async queryFn() {
      const res = await supabase.from('forms').select().eq('uuid', props.formId).single();
      if (res.error) return notFound();
      return res.data as FormRecord;
    },
  });

  return (
    <UserFormContext.Provider value={{ form: formQuery.data }}>
      {props.children}
    </UserFormContext.Provider>
  );
};

export { UserFormContext, UserFormProvider };
