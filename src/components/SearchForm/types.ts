import * as z from 'zod';

import { searchFormSchema } from '@/components/SearchForm/schema';

export type SearchFormInputs = z.infer<typeof searchFormSchema>;
