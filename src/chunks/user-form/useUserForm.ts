import { useMediaQuery } from '@mantine/hooks';
import { useCallback } from 'react';
import { Lg } from '@/constants/css-breakpoints';
import { UserFormProps } from './UserForm.types';

export default function useUserForm(props: UserFormProps) {
  const isLg = useMediaQuery(`(min-width: ${Lg})`);
  const formLink = useCallback(() => `${window.location.origin}/fill-form/${props.form.uuid}`, []);

  return { formLink, isLg };
}
