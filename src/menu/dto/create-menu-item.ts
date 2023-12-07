import { z } from 'zod';

const createMenuItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
  category: z.enum(['BURGER', 'SIDES', 'DRINK']),
});

export type CreateMenuItemSchema = z.infer<typeof createMenuItemSchema>;
