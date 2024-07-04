import { BiCaretLeft } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { IoVideocamSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoAttachOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { AppContex } from "../../lib/Reducher";
import { useContext, useEffect, useRef, useMemo, useState } from "react";
import photo from "../../assets/img/npphoto.jpg";
//import bgImg from "../../assets/BGimg/Wallpaper.jpg";
import ClintSocket from "../../lib/Socket";
import { MsgContex } from "../Message";
// import Inputhandel from "../../lib/InputHandel";
// import PostData from "../../lib/Post";
import { DataContex } from "../Gobal";
import React from "react";

const MessagePage: React.FC =React.memo( () =>  {
  // const [msg,setMsg]=useState({text:''})
  const {
    state: { msgpag, setimge, showPage },
    dispach,
  } = useContext(AppContex);
  const { data } = useContext(DataContex);
  const { msgData, setMsgData, img, socket,setSocket } = useContext(MsgContex);
  
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState<string>('');

  //memorize object
  const optionObj = useMemo(
    () => ({
      transports: ["websocket"],
    }),
    []
  );
  const { sendMessage, risivemsg } = ClintSocket(
    "http://localhost:3300",
    optionObj
  );
  //Socket Impimantation

  const user = localStorage.getItem("userDitials") ?? "";
  const userID = JSON.parse(user);

  //Risive massage
  useEffect(() => {
    ;
    risivemsg("resive", (msg) => {
      setMsgData((pre) => [...pre, msg]);
    });
  }, [risivemsg, setMsgData]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement && msgData.length > 0) {
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }, [msgData]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const objpre = {
    text: "",
    file: "",
    voies: "",
    SenderID: userID.ID,
    RisiverID: socket.RisiverID,
    ConversatoonID: socket.ConversatoonID,
  };
  //pre data send 
  useEffect(() => {
    if (socket.send) {
      console.log('inner reander')
      sendMessage("msg", objpre);
      
    }
    setTimeout(() => {
      setSocket((pre) => ({...pre,
        send: false}))
  }, 200);
  }, [sendMessage,objpre,socket,setSocket]);
  //Data send
  const SendData = () => {
   
    

    const newMsg = {
      ResiverId: '',
      SenderId: userID.ID,
      ConversationId: '',
      messages: input,
    };
    const msg = {
      text: input,
      file: "",
      voies: "",
      SenderID: userID.ID,
      RisiverID: socket.RisiverID,
      ConversatoonID: socket.ConversatoonID,
    };
    sendMessage("msg", msg);
    setMsgData([...msgData, newMsg]);
    setInput('')
  };

  if (showPage)
    return (
      <div>
        <h1>blank massage!</h1>
      </div>
    );

  return (
    <div className="PageCon">
      <div className="pageHead">
        <div
          onClick={() => dispach({ type: "MSGPAGE", value: !msgpag })}
          className="arrow"
        >
          <BiCaretLeft />
        </div>
        <div className="Imgbox">
          <div className="acctive"></div>
          <img src={img.hisPhoto || photo} alt="userPhoto" />
        </div>
        <div className="otherOptin">
          <div className="Names">
            <h3>{img.hisName}</h3>
            <p>{img.hisDate}</p>
          </div>
          <div className="Icons">
            <IoMdCall />
            <IoVideocamSharp />
            <HiDotsHorizontal />
          </div>
        </div>
      </div>
      <div
        className="mainMsgPag"
        ref={scrollRef}
        style={{
          background: `url("../../../public/images/photo/${setimge}.jpg")`,
          objectFit: "cover",
        }}
      >
        <div className="pagecountuner">
          <div className="userPro">
            <div className="IMG">
              <img src={img.hisPhoto || photo} alt="userphoto" />
            </div>
            <div className="Ditils">
              <div className="name">
                <h3>{img.hisName}</h3>
                <p>{img.hisDate}</p>
              </div>
              <div className="acctives">
                <div className="mainAc"></div>
              </div>
            </div>
          </div>
          {msgData.map((_, i) =>
            msgData[i].SenderId == userID.ID ? (
              <div key={i} className="sendermsg">
                <div className="mainmassage">
                  <div className="img">
                    <img src={data.Photo} alt="myphoto" />
                  </div>
                  <div className="msgbox">
                    <p>{msgData[i].messages} </p>
                    <img src={msgData[i].photo} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div key={i} className="resivermsg">
                <div className="mainmassage">
                  <div className="img">
                    <img src={img.hisPhoto} alt="" />
                  </div>
                  <div className="msgbox">
                    <p>{msgData[i].messages}</p>
                    <img src={msgData[i].photo} alt="" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        ;
      </div>
      <div className="SenderOption">
        <input
          autoComplete="off"
          type="text"
          placeholder="massages.."
          value={input}
          onChange={(e) => {
             setInput(e.target.value)
          }}
        />
        <div className="icons">
          <div className="microphone">
            <HiOutlineMicrophone />
          </div>
          <div className="attichmant">
            <input type="file" accept="image/* video/mp4 audio/mp3" />
            <IoAttachOutline />
          </div>
          <button
            onClick={() => {
              SendData();
            }}
          >
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
});

export default MessagePage;
