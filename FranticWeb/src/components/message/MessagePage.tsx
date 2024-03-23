import { BiCaretLeft } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { IoVideocamSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoAttachOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { AppContex } from "../../lib/Reducher";
import { useContext } from "react";
import photo from "../../assets/img/habib.png";
const MessagePage = () => {
   const { state:{msgpag},dispach} = useContext(AppContex);
  // console.log(state);
  return (
    <div className="PageCon">
      <div className="pageHead">
        <div onClick={()=>dispach({type:"MSGPAGE",value: !msgpag})} className="arrow">
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
      <div className="mainMsgPag">
        <div className="pagecountuner">
          <div className="userPro">
            <div className="IMG">
              <img src={photo} alt="userphoto" />
            </div>
            <div className="Ditils">
              <div className="name">
                <h3>MD Habib</h3>
                <p>Join 4-30-2023</p>
              </div>
              <div className="acctives">
                <div className="mainAc"></div>
              </div>
            </div>
          </div>
          <div className="sendermsg">
            <div className="mainmassage">
              <div className="img">
                <img src={photo} alt="myphoto" />
              </div>
              <div className="msgbox">
                <p>hello world </p>
                <img src={photo} alt="mypro" />
              </div>
            </div>
          </div>
          <div className="resivermsg">
            <div className="mainmassage">
              <div className="img">
                <img src={photo} alt="" />
              </div>
              <div className="msgbox">
                <p>hellow next message</p>
                <img src={photo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SenderOption">
        <input autoComplete="off" type="text" placeholder="massages.." />
        <div className="icons">
          <div className="microphone">
            <HiOutlineMicrophone />
          </div>
          <div className="attichmant">
            <input type="file" accept="image/* video/mp4 audio/mp3" />
            <IoAttachOutline />
          </div>
          <button>
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
