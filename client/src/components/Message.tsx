import MessageBar from "./message/MessageBar";
import MessagePage from "./message/MessagePage";
import { AppContex } from "../lib/Reducher";
import { useContext, useEffect } from "react";
import MoreOption from "./functionality/MoreOption";
import BgImage from './functionality/BgImage';
import { useNavigate } from "react-router-dom";
const Message = () => {
  const { state: { msgpag } } = useContext(AppContex);
  const navigate = useNavigate();
  useEffect(() => {
    const stor = localStorage.getItem("userDitials");
    if (stor) {
      console.log(stor);
      // Navigate("/login");
    } else {
      navigate("/login");
    }
  })
  return (
    <div> 
      <div className={"messageCon"}>
        <BgImage/>
      <MoreOption/>

        <div className={msgpag ? "messageBar showmsg" : "messageBar"}>
          <MessageBar />
        </div>
        <div className={msgpag ? "messagePage showmsg" : "messagePage"}>
          <MessagePage />
        </div>
      </div>
    </div>
  );
};

export default Message;
