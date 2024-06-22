const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});