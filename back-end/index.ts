import express from 'express';
import statusCodes from './statusCodes';

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/', (req, res) => {
  res.status(statusCodes.OK).send('Express + TypeScript')
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na post ${PORT}`);
});
