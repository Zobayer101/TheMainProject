import photo from "../../assets/img/npphoto.jpg";
import { BiCheckDouble } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AppContex } from "../../lib/Reducher";
import { useContext } from "react";
import SideBar from "../Feed/Sidebar";
import GetUser from "../../lib/Get";
import PostData from "../../lib/Post";

const MessageBar = () => {
  const {
    state: { msgpag },
    dispach,
  } = useContext(AppContex);
  const [bar, setBar] = useState(false);
  const [data, setData] = useState([]);
  const Token = localStorage.getItem('token');
  useEffect(() => {
    if (Token) {
      
      const URL = "http://localhost:3300/route/api/allUser/ditials";
      (async () => {
  
        const userData = await GetUser(URL, Token.split(`"`)[1]);
        
       setData(userData)
      })();
    }
  }, [setData,Token]);
  const sendID = async (ID: string) => {
    const url = "http://localhost:3300/route/api/create/conversation";
    if (Token) {
      console.log(Token)
      const userData = await PostData(url,{ID},Token.split(`"`)[1]);
      alert(JSON.stringify(userData));
    }
  }
  return (
    <div className="barcoun">
      <div className={bar ? "sideBar showbar" : "sideBar"}>
        <div className="IconBar">
          <div
            onClick={() => {
              dispach({ type: "MORE", value: false }),
                dispach({ type: "BGIMG", value: false }),
                setBar(!bar);
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
              sendID(data[index]._id);
            }}
            className="usersBar"
            key={index}
          >
            <div className="userImg">
              <div className="acttive"></div>
              <img src={data[index].image||photo} alt="" />
            </div>
            <div className="userdigials">
              <div className="Name">
                <h3>{data[index].fname}</h3>
                <p>10-12-2024</p>
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
