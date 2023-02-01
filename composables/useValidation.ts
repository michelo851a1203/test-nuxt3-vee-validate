import * as zod from 'zod';
import { toFormValidator } from '@vee-validate/zod';
import type { FormContext } from 'vee-validate';

export const useValidation = () => {
  const validationSchema = toFormValidator(zod.object({
    user: zod.string()
      .email({ message: 'need correct email'})
      .min(1, 'need user account required'),
    password: zod.string()
      .min(1, 'need password required'),
  }));

  const initialValues = {
    user: '',
    password: '',
  }

  const handleSubmit = (values: Record<string, unknown>, actions: FormContext) => {
    console.log(values);
    actions.resetForm()
  }

  return {
    validationSchema,
    initialValues,
    handleSubmit,
  }
}
