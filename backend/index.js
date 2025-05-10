const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
app.use(cors());
app.use(express.json());
const mainRouter = require('./routes/index');



const app = express();
app.use("/api/v1", mainRouter);
app.listen(3000);