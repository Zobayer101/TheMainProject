import photo from "../../assets/img/npphoto.jpg";
import { BiCheckDouble } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AppContex } from "../../lib/Reducher";
import { useContext } from "react";
import SideBar from "../Feed/Sidebar";
import GetUser from "../../lib/Get";
import PostData from "../../lib/Post";
import { MsgContex } from "../Message";
import DeBounce from "../../lib/DeBounce";

const MessageBar = () => {
  const { data,setMsgData ,setData,setImg,setSocket } = useContext(MsgContex);
  const {
    state: { msgpag },
    dispach,
  } = useContext(AppContex);
  const [bar, setBar] = useState<object>({showbar:false,showuser:false});
  const [search, setSearch] = useState<string>('');
  const [finduser, setFinguser] = useState<string[]>([]);
  const Token = localStorage.getItem("token");
  const url = "http://localhost:3300/route/api/create/conversation";
  useEffect(() => {
    if (Token) {
      const URL = "http://localhost:3300/route/api/allUser/ditials";
      (async () => {
        const userData = await GetUser(URL, Token.split(`"`)[1]);
        
        setData(userData);
      })();
    }
  }, [setData, Token]);
  const DeBounceData = DeBounce(search, 1000);
  useEffect(() => {
     const url = "http://localhost:3300/route/api/user/search/getdata";
    (async() => {
      const data = await PostData(url, { fname: DeBounceData }, '');
      
      if (data[0]) {
        setFinguser(data);
        setBar((pre) => ({
          ...pre,
          showuser:true,
        }));
      } else {
        setBar((pre) => ({
          ...pre,
          showuser:false,
        }));
        
      }
      })()
 },[DeBounceData])

  const sendID = async (ID: string) => {
    
    if (Token) {
      const msg = await PostData(url, { ID }, Token.split(`"`)[1]);
      console.log(msg);
      setMsgData(msg)
    }
    dispach({ type: "SHOWPAGE", value: false });
  };
  const sendConversation = async (ID:string) => {
    if (Token) {
       const msgData = await PostData(url, { ID }, Token.split(`"`)[1]);
      console.log(msgData);
      setData([...data, msgData]);
    }
  }
  console.log(data);
  return (
    <div className="barcoun">
      <div className={bar.showbar ? "sideBar showbar" : "sideBar"}>
        <div className="IconBar">
          <div
            onClick={() => {
              dispach({ type: "MORE", value: false });
              dispach({ type: "BGIMG", value: false });
              setBar((pre) => ({
                ...pre,
                showbar: !bar.showbar,
              }));
              //sendID("662145767c717cab23a2b5a2");
            }}
            className={bar.showbar ? "togglebtn ON" : "togglebtn"}
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
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search..."
          />
        </div>
      </div>
      <div className={bar.showuser ? "searching" : "removeSearch"}>
         {finduser.map((_,i)=>(
           <div key={i} className="searchItem" onClick={() => {
             sendConversation(finduser[i]._id);
            setSearch('')
        }}>
         
           
             <p> { finduser[i].fname +' '+ finduser[i].lname}</p>
           </div>
             ))
        }
       
      </div>
      <div className="allusers">
        {/* User bar */}
        {data.map((_, index) => (
          <div
            onClick={() => {
              dispach({ type: "MSGPAGE", value: !msgpag });
              sendID(data[index].resiverID);
              setSocket((pre) => ({
                ...pre,
                ConversatoonID: data[index].ConversationID,
                RisiverID: data[index].resiverID,
                SenderID: data[index].senderID,
              }));
              setImg((pre) => ({
                ...pre,
                hisPhoto: data[index].photo,
                hisName: data[index].fname,
                hisDate: data[index].date,
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
