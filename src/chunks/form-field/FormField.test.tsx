import { act, renderHook } from '@testing-library/react';
import { useImmer } from 'use-immer';
import FormField from './FormField';
import useFormField from './useFormField';
import { render, screen } from '@/config/test-utils';
import { FieldsProvider } from '@/fragments/build-form/FieldsContext';
import { FieldType } from '@/types/forms.types';

describe('<FormField/>', () => {
  const setup = () => {
    render(<FormField fieldType={FieldType.Money} index={0} label="Label" />);
  };

  beforeEach(() => setup());

  it('renders field type', () => {
    expect(screen.getByTestId('fieldType')).toHaveTextContent(FieldType.Money);
  });

  it('renders "edit label" input', () => {
    expect(screen.getByRole('textbox', { name: /edit/i })).toHaveValue('Label');
  });
});

describe('FieldsContext', () => {
  let h: { current: any };

  const setup = () => {
    const { result } = renderHook(
      () =>
        useFormField({
          fieldType: FieldType.Money,
          index: 0,
          label: 'Label',
        }),
      { wrapper: FieldsProvider }
    );
    h = result;
  };

  beforeEach(setup);

  it('changes label when you call onChangeLabel', () => {
    act(() => h.current.onChangeLabel('New Label'));
    expect(h.current.context.fields[0].label).toBe('New Label');
  });

  it('deletes field when you call onDelete', () => {
    act(() => h.current.onDelete());
    expect(h.current.context.fields.length).toBe(0);
  });

  it('works with custom updater', () => {
    const field1 = { label: 'Label1', type: FieldType.Rating };
    const field2 = { label: 'Label2', type: FieldType.Money };
    const { result: resImmer } = renderHook(() => useImmer([field1, field2]));
    const [, updater] = resImmer.current;
    const { result } = renderHook(() =>
      useFormField({
        fieldType: field1.type,
        label: field1.label,
        index: 0,
        updater,
      })
    );

    act(() => result.current.onChangeLabel('New Label 1'));

    const [fields] = resImmer.current;
    expect(fields[0].label).toBe('New Label 1');
  });
});
