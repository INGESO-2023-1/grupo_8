const express = require('express');
const axios = require('axios');

const router = express.Router();

function device() {
    
}


const device_arr = [];
const len = oFullResponse.results.length;

for (const i = 0; i < len; i++) {
    device_arr.push({
        key: oFullResponse.results[i].label,
        sortable: true;
        resizeable: true;
    });
}

function mapa(hlr, msc = [], dispositivo = []){
    this.hlr = hlr;
    this.msc = msc;
    this.dispositivo = dispositivo;
}

async function Simulacion() {
    
}
Simulacion();

router.get('/', (req, res) => {
    res.send();
})

module.exports = router;