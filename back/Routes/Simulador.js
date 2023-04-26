const express = require('express');
const axios = require('axios');
const router = express.Router();

async function GetDatos() {

    const datos = await axios.get('https://localhost/3000')
    .then((datos) => {
        displayOutput(datos);
    })
    .catch((err) => console.log(err));

    console.log(datos);

}

router.get('/', (req, res) => {

    res.send();
    GetDatos();
})

module.exports = router;