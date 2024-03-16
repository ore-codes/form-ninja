import { Updater } from 'use-immer';
import { Field, FieldType } from '@/types/forms.types';

export interface FormFieldProps {
  fieldType: FieldType;
  index: number;
  label: string;
  updater?: Updater<Field[]>;
}
