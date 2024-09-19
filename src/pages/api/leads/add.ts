// app/api/users/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { UsersLeadsSchema } from '@/lib/validators/user.schema';
import * as Yup from 'yup';
import { prisma } from '@/lib/prisma/prisma';


// POST /api/leads/add
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  
      const data = req.body;
       // Validate the data using Yup
       try {
        await UsersLeadsSchema.validate(data, { abortEarly: false });
      } catch (validationError) {
        // Collect all validation errors
        const errors = (validationError as Yup.ValidationError).inner.map((err) => ({
          path: err.path,
          message: err.message,
        }));
        return res.status(400).json({ errors: errors.map(error => error.message).join() });
      }

      const newLeads = await prisma.leads.create({  data: {
        ...data
      } });
      return res.status(201).json(newLeads);
  
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ error: error.message });
  }
}