import MessageBar from "./message/MessageBar";
import MessagePage from "./message/MessagePage";
import { AppContex } from "../lib/Reducher";
import { useContext } from "react";
import MoreOption from "./functionality/MoreOption";
import BgImage from './functionality/BgImage';
const Message = () => {
  const { state:{msgpag}} = useContext(AppContex);
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
