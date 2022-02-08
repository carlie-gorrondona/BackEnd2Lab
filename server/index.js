//run command: npm i express cors
//then run command: nodemon server/index.js localhost 4000

const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

//ENDPOINTS

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.createHouse);
app.delete('/api/houses/:id', controller.deleteHouse);
app.put('/api/houses/:id', controller.updateHouse);


app.listen(4004, () => console.log("Running in port 4004"));