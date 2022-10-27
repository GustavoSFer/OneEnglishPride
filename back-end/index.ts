import express from 'express';
import route from './src/App/Routers/user';

const app = express();

app.use(express.json());

const PORT = 3001;

app.use('/user', route);

app.listen(PORT, () => {
  console.log(`Servidor rodando na post ${PORT}`);
});
