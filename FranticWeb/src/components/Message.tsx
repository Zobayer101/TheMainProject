import MessageBar from "./message/MessageBar";
import MessagePage from "./message/MessagePage";

const Message = () => {
  return (
    <div>
      <div className="messageCon">
        <div className="messageBar">
          <MessageBar />
        </div>
        <div className="messagePage">
          <MessagePage />
        </div>
      </div>
    </div>
  );
};

export default Message;
