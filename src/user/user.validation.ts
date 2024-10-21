import { z, ZodType } from 'zod';

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    username: z.string().nonempty().min(3),
    name: z.string().nonempty().min(3),
    password: z.string().nonempty().min(3),
  });

  static readonly LOGIN: ZodType = z.object({
    username: z.string().nonempty().min(3),
    password: z.string().nonempty().min(3),
  });
}
