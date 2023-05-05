import React, { useEffect, useState } from 'react'
import axios from 'axios';


const GetSim = () => {

    const [msc, setMsc] = useState('');
    const [disp, setDisp] = useState('');

    const handleSubmit = event => {
        alert('La cantidad de MSC es: ' + msc + 'y los dispositivos son: ' + disp);
        PostData();
        event.preventDefault();
    }

    const handleMsc = event => {
        setMsc(event.target.value);
    }

    const handleDisp = event => {
        setDisp(event.target.value);
    }

    const datos = {
        cant_msc: msc,
        cant_disp: disp
    }

    async function PostData ()  {
        try {
            const resp = await axios.post('https://localhost:4000/Simulador', datos);
            console.log(resp.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Cantidad de MSC:
                    <input 
                        name='MSC'
                        type='number'
                        onChange={handleMsc}
                    />
                </label>
                <br />
                <label>
                    Cantidad de dispositivos:
                    <input 
                        name='Dispositivos'
                        type='number'
                        onChange={handleDisp}
                    />
                </label>
                <br />
                <input type='submit' value={"Submit"}/>
            </form>
        </div>
    );
}

export default GetSim;




