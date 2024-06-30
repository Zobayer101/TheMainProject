import { useEffect } from "react";
import { io } from 'socket.io-client';

const ClintSocket = (message:object,setMessage:any,setMsgData:any,msgData:string[]) => {
    try {
       
        useEffect(() => {
            console.log('render socket.io');
            const socket = io("http://localhost:3300");
            socket.on("connect", () => {
                console.log("connection successfull");
                if (message.send && message.SenderID) {
                    socket.emit('msg', { message, ID: socket.id });
                    
                }
                socket.on("resive", (msg) => {
                    console.log(msg);
                    setMsgData((pre: any) => [...pre, msg]);
                      setMessage((pre: any) => ({
                        ...pre,
                        send: false,
                      }));
                });
                });
          
            return () => {
                socket.disconnect();
            }
        },[message,setMessage,setMsgData,msgData]);
    } catch (error) {
        console.log(error);
    }
}

export default ClintSocket;
