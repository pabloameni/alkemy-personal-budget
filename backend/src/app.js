const express   = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/operations', require('./routes/operations'));

const SERVER_PORT = process.env.NODE_PORT || 3030;

const server = app.listen(SERVER_PORT, () => {
    const host = server.address().address;

    console.log(`Running on port http://${host}:${SERVER_PORT}`);
}).on('error', e => {
    console.error(e.message);
});