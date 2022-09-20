import * as z from 'zod';

import { newTransactionFormSchema } from '@/components/NewTransactionModal/schema';

export type TransactionTypeButtonProps = {
  variant: 'income' | 'outcome';
};

export type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;
