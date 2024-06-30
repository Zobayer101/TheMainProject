import MessageBar from "./message/MessageBar";
import MessagePage from "./message/MessagePage";
import { AppContex } from "../lib/Reducher";
import { useContext, useEffect, useState } from "react";
import MoreOption from "./functionality/MoreOption";
import BgImage from "./functionality/BgImage";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
interface MsgContextType {
  data: string[];
  setData: React.Dispatch<React.SetStateAction<string[]>>;
  msgData: string[];
  setMsgData: React.Dispatch<React.SetStateAction<string[]>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  img: object;
  setImg: React.Dispatch<React.SetStateAction<object>>;
  socket: object;
  setSocket: React.Dispatch<React.SetStateAction<object>>;
}
const defaultValue: MsgContextType = {
  data: [],
  setData: () => {},
  msgData: [],
  setMsgData: () => {},
  message:'',
  setMessage: () => {},
  img: {},
  setImg: () => {},
  socket: {},
  setSocket: () => {},
};

export const MsgContex = createContext<MsgContextType>(defaultValue);

const Message: React.FC = () => {
  const {
    state: { msgpag },
  } = useContext(AppContex);
  const navigate = useNavigate();
  const [data, setData] = useState<string[]>([]);
  const [msgData, setMsgData] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [socket, setSocket] = useState<object>({
    text: "",
    file: "",
    voies: "",
    SenderID: "",
    RisiverID: "",
    ConversatoonID: "",
    send: true,
  });
  const [img, setImg] = useState<object>({
    myPhoto: "",
    hisPhoto: "",
    hisName: "",
    hisDate: "",
  });
  useEffect(() => {
    const stor = localStorage.getItem("userDitials");
    if (stor) {
      // console.log(stor);
      // Navigate("/login");
    } else {
      navigate("/login");
    }
  });
  
  return (
    <div>
      <MsgContex.Provider
        value={{
          data,
          setData,
          message,
          setMessage,
          msgData,
          setMsgData,
          img,
          setImg,
          socket,
          setSocket,
        }}
      >
        <div className={"messageCon"}>
          <BgImage />
          <MoreOption />

          <div className={msgpag ? "messageBar showmsg" : "messageBar"}>
            <MessageBar />
          </div>
          <div className={msgpag ? "messagePage showmsg" : "messagePage"}>
            <MessagePage />
          </div>
        </div>
      </MsgContex.Provider>
    </div>
  );
};

export default Message;
