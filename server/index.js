//run command: npm i express cors
//then run command: nodemon server/index.js localhost 4000

const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

//ENDPOINTS







app.listen(4000, () => console.log("Running in port 4000"));