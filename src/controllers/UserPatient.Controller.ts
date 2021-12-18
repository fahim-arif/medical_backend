import { NextFunction, Request, Response } from 'express';
import { findPatients } from '@root/services/UserPatient.Service';
import {FindOptions} from '@models/Common'
// import 
// schema
// import {} from '@controllers/UserPatient.Controller';

export const getPatients = async (options:FindOptions) => {

    try {
       const patientAccounts =  await findPatients(options);
       return patientAccounts;
    } catch (error) {
       console.log(error);
    }
};

