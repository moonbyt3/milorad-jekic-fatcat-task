import { z } from 'zod';

export const validationSchema = z.object({
    title: z
        .string()
        .min(3, 'Title must have minimum 3 characters')
        .max(50, 'Title must be 50 characters or less'),
    body: z
        .string()
        .min(10, 'Body must have minimum 10 characters')
        .max(500, 'Body must be 500 characters or less'),
});

export type FormData = z.infer<typeof validationSchema>;
