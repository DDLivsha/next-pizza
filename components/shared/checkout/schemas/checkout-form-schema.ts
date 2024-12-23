import {z} from "zod";

export const checkoutFormSchema = z.object({
    firstName: z.string().min(2, 'Ім’я повинно містити не менше 2 символів').max(50, 'Ім’я повинно містити не більше 50 символів'),
    lastName: z.string().min(2, 'Прізвище повинно містити не менше 2 символів').max(50, 'Прізвище повинно містити не більше 50 символів'),
    email: z.string().email('Некоректний емейл').max(50, 'Емейл повинен бути не більше 50 символів').trim().toLowerCase(),
    phone: z.string().regex(/^\+380\d{9}$/, 'Некоректний номер телефону').max(13, 'Номер телефону повинен бути не більше 13 символів').trim(),
    address: z.string().min(2, 'Адреса повинна містити не менше 2 символів').max(100, 'Адреса повинна містити не більше 100 символів'),
    comment: z.string().optional(),

})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>