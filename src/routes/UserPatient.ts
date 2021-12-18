import express, {NextFunction, Request, Response} from 'express';
import {getPatients} from '@controllers/UserPatient.Controller';

const router = express.Router();

const getPatientAccounts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const options = req.query;
    const patientUsers = await getPatients(options);
    res.status(200).json(patientUsers);
  } catch (error) {}
};

router.get('/', getPatientAccounts);

export default router;
