import * as dotenv from 'dotenv';
import 'module-alias';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import patientUserRouter from '@routes/UserPatient';

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/users', patientUserRouter);

app.listen(process.env.PORT, () => {
    console.log('server is running at port ' + process.env.PORT)
})