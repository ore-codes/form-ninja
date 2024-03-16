'use client';

import { createContext, PropsWithChildren } from 'react';
import { Updater, useImmer } from 'use-immer';
import { FieldType } from '@/types/forms.types';

interface Field {
  label: string;
  type: FieldType;
}

interface FieldsContextReturn {
  fields: Field[];
  updateFields: Updater<Field[]>;
}

const FieldsContext = createContext<FieldsContextReturn>({} as FieldsContextReturn);

const FieldsProvider = ({ children }: PropsWithChildren) => {
  const [fields, updateFields] = useImmer<Field[]>([]);

  return (
    <FieldsContext.Provider value={{ fields, updateFields }}>{children}</FieldsContext.Provider>
  );
};

export { FieldsContext, FieldsProvider };
export type { Field };
