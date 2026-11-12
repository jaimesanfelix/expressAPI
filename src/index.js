import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('Server is running ' + PORT);
});

app.get('/', (req, res) => {
  res.send('Hola Edem');
});

app.get('/users', (req, res) => {
  res.json('Todos los usuarios');
});
app.post('/users', (req, res) => {
  console.log(req.body);
  res.status(201).json('Usuario creado');
});

app.put('/users/:id', (req, res) => {
  console.log(req.params.id);
  res.json('Usuario actualizado');
});

app.delete('/users/:id', (req, res) => {
  console.log(req.params.id);
  res.json('Usuario elminado');
});
