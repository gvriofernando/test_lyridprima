const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const pegawaiRoutes = require('./routes/pegawai.routes');
const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

sequelize.sync().then(() => {
  console.log('Database synced.');
}).catch((error) => {
  console.error('Error syncing database:', error);
});

app.use('/api/users', userRoutes);
app.use('/api/pegawais', pegawaiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
