import express from 'express';
import morgan from 'morgan';
import router from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(morgan('dev'));
app.use('/users', router);

app.listen(PORT, () => {
  console.log('Server is running ' + PORT);
});

app.get('/', (req, res) => {
  res.send('Hola Edem2');
});
