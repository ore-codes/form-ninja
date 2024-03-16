import { useCallback } from 'react';
import { UserFormProps } from './UserForm.types';

export default function useUserForm(props: UserFormProps) {
  const formLink = useCallback(() => `${window.location.host}/fill-form/${props.form.uuid}`, []);

  return { formLink };
}
