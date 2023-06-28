import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosApi";
import Navigation from "./Navigation_bar";
 

const Hello = () => {
    const[message, setMessage] = useState("");

    useEffect(() => {
        async function ObtainMessage() {
            try{
                const response = await axiosInstance.get('/hello/');
                const message = response.data.hello;
                setMessage(message);
            }catch(error){
                console.log('Error: ', JSON.stringify(error, null, 4));
                throw error;
            }

        }

        ObtainMessage();
    }, []);

    const handleChatNameSubmit = (chatName) => {
        console.log('Submitted chat name: ', chatName)
    }

    return(
        <div>
            <Navigation />
            <p>
                {message}
            </p>
        </div>
    );
}

export default Hello;