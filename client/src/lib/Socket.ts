import { useEffect, useRef } from "react";
import { io,Socket } from 'socket.io-client';
// const socket = io("http://localhost:3300",{transports:['websocket'],});
// socket.emit('msg', { message, ID: socket.id });
// socket.on("resive", (msg) => { });

const ClintSocket = (url: string, option?: SocketIOClient.ConnectOpts) => {
  const socketRef = useRef<Socket | null>(null);
  useEffect(() => {
    socketRef.current = io(url, option);
    return () => {
      socketRef.current?.disconnect();
    };
  }, [url, option]);
    const sendMessage = (event:string,message:any) => {
        if (socketRef.current) {
            socketRef.current.emit(event, {message,ID:socketRef.current.id});
        }
    }
    const risivemsg = (event: string, callback:(msg:any)=>void) => {
        if (socketRef.current) {
            socketRef.current.on(event, callback);
        }
    }
    return {sendMessage,risivemsg}
};

export default ClintSocket;
