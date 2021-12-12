import * as dotenv from 'dotenv';
import 'module-alias';
import express from 'express';

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log('server is running at port ' + process.env.PORT)
})