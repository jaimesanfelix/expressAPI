import express from 'express';
import morgan from 'morgan';
import { dbConnection } from './config/db.js';
import './cron/cron.date.js';
import './cron/cron.tasks.js';
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(morgan('dev'));
app.use('/', router);

dbConnection()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database: ', error);
  });

app.get('/', (req, res) => {
  res.send('Hola Edem');
});
