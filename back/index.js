const express = require('express');
const router = require('./routes.js');
const bodyParser = require('body-parser')
const PORT = process.env.port || 8080;
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());

app.use(router);
app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));