import { BiCaretLeft } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { IoVideocamSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoAttachOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

import photo from "../../assets/img/habib.png";
const MessagePage = () => {
  return (
    <div className="PageCon">
      <div className="pageHead">
        <div className="arrow">
          <BiCaretLeft />
        </div>
        <div className="Imgbox">
          <div className="acctive"></div>
          <img src={photo} alt="userPhoto" />
        </div>
        <div className="otherOptin">
          <div className="Names">
            <h3>MD habib</h3>
            <p>34-10-2024</p>
          </div>
          <div className="Icons">
            <IoMdCall />
            <IoVideocamSharp />
            <HiDotsHorizontal />
          </div>
        </div>
      </div>
      <div className="mainMsgPag"></div>
      <div className="SenderOption">
        <input autoComplete="off" type="text" placeholder="massages.." />
        <div className="attichmant">
          <IoAttachOutline />
        </div>
        <button>
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default MessagePage;
