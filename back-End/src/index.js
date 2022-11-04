const express = require('express');
const routeUsers = require('./Routes/user');
const error = require('./Middleware/error');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use('/users', routeUsers);
app.use(error);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
