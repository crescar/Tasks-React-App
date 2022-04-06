const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('./db')

app.use(cors())
app.use(express.json())
app.use(require('./Routers/Routers'));
app.use(morgan('dev'));



app.listen('3100', () => {
    console.log("Server is running on port 3100");})