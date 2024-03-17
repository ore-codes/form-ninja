import { Tables } from '@/types/database.types';

export interface Field {
  label: string;
  type: FieldType;
}

export enum FieldType {
  Money = 'Money',
  Rating = 'Rating',
  Text = 'Text',
}

export type FormRecord = Tables<'forms'> & {
  fields: Field[];
  responses?: Partial<Tables<'responses'>>[];
};

export type FormResponseData = Record<string, any>;
