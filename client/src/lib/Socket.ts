import { useEffect } from "react";
import { io } from 'socket.io-client';

const ClintSocket = () => {
    try {
       
        useEffect(() => {
            const socket = io("http://localhost:3300");
            socket.on("connect", () => {
                console.log("connection successfull");
               
            });
            socket.on("servers", (msg) => {
                console.log(msg);
            });
            return () => {
                socket.disconnect();
            }
        },[]);
    } catch (error) {
        console.log(error);
    }
}

export default ClintSocket;
