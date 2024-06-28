import photo from "../../assets/img/npphoto.jpg";
import { BiCheckDouble } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AppContex } from "../../lib/Reducher";
import { useContext } from "react";
import SideBar from "../Feed/Sidebar";
import GetUser from "../../lib/Get";
import PostData from "../../lib/Post";
import { MsgContex } from "../Message";

const MessageBar = () => {
  const { data, setData,setMessage,setMsgData,setImg } = useContext(MsgContex);
  const {
    state: { msgpag },
    dispach,
  } = useContext(AppContex);
  const [bar, setBar] = useState(false);

  const Token = localStorage.getItem("token");
  useEffect(() => {
    if (Token) {
      const URL = "http://localhost:3300/route/api/allUser/ditials";
      (async () => {
        const userData = await GetUser(URL, Token.split(`"`)[1]);
        
        setData(userData);
      })();
    }
  }, [setData, Token]);
  const sendID = async (ID: string) => {
    
    const url = "http://localhost:3300/route/api/create/conversation";
    if (Token) {
      const msgData = await PostData(url, { ID }, Token.split(`"`)[1]);
      setMsgData(msgData);
    }
    dispach({ type: "SHOWPAGE", value: false });
  };
  console.log(data)
  return (
    <div className="barcoun">
      <div className={bar ? "sideBar showbar" : "sideBar"}>
        <div className="IconBar">
          <div
            onClick={() => {
              dispach({ type: "MORE", value: false });
                dispach({ type: "BGIMG", value: false });
                setBar(!bar);
              //sendID("662145767c717cab23a2b5a2");
            }}
            className={bar ? "togglebtn ON" : "togglebtn"}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <SideBar />
      </div>
      <div className="barhed">
        <div className="searchBox">
          <input type="search" placeholder=" Search.. " />
        </div>
      </div>
      <div className="allusers">
        {/* User bar */}
        {data.map((_, index) => (
          <div
            onClick={() => {
              dispach({ type: "MSGPAGE", value: !msgpag });
              sendID(data[index].resiverID);
              setMessage((pre) => ({
                ...pre,
                risiverID: data[index].resiverID,
                conversationID: data[index].ConversationID,

              }));
              setImg((pre) => ({
                ...pre,
                hisPhoto: data[index].photo,
                hisName: data[index].fname,
                hisDate:data[index].date,
              }));
            }}
            className="usersBar"
            key={index}
          >
            <div className="userImg">
              <div className="acttive"></div>
              <img src={data[index].photo || photo} alt="" />
            </div>
            <div className="userdigials">
              <div className="Name">
                <h3>{data[index].fname}</h3>
                <p>{data[index].date}</p>
              </div>
              <div className="sendMessage">
                <BiCheckDouble className="Tick" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MessageBar;
