import MessageBar from "./message/MessageBar";
import MessagePage from "./message/MessagePage";
import { AppContex } from "../lib/Reducher";
import { useContext } from "react";
const Message = () => {
  const { state:{msgpag}} = useContext(AppContex);
  return (
    <div>
      <div className={"messageCon"}>
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
