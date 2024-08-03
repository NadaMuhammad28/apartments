import * as z from 'zod';

export const addApartmentSchema = z.object({
  name: z.string().nonempty('Apartment name is required'),
  location: z.string().nonempty('Location is required'),
  price: z.string().refine((val)=>
    +val> 0 ? true : 'Price must be a positive number'
  ),
  description: z.string(),
});

export type ApartmentSchema = z.infer<typeof addApartmentSchema>;
