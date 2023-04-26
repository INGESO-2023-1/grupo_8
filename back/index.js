const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const Simulador = require('./Routes/Simulador');

app.use('/Simulador', Simulador);

app.use('/Simulador', (req, res) => {
    res.send("Hello world");
})

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

