import prisma from './PrismaClient';
import {PrismaException} from '@utils/PrismaException';


export const create = async (patientAccountCreate:any) => {
  try {
    const {handle, email, company_name, description} = patientAccountCreate;
    const createPatient = await prisma.patient.create({
      data: {
        handle,
        email,
        company_name,
        description,
      },
    });

    return createPatient;
  } catch (error) {
    throw new PrismaException(error.error_code, error.message, error.meta);
  }
};
