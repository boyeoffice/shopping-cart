import 'dotenv/config';

import express from 'express';
// import dotenv from 'dotenv';

// import db from './database/config';

// dotenv.config();

import { dbCreateConnection } from './typeorm/connection';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/ping', async (req, res) => {
  res.send({
    environment: process.env.NODE_ENV,
    message: 'Wellcome to Iryss'
  });
});

(async () => {
  try {
    await dbCreateConnection();

    app.listen(PORT, () => {
      console.log('Started at http://localhost:%d', PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();
