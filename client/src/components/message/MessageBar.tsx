import photo from "../../assets/img/habib.png";
import { BiCheckDouble } from "react-icons/bi";
import { useState } from "react";
import { AppContex } from "../../lib/Reducher";
import { useContext } from "react";
const MessageBar = () => {
  const {state:{msgpag},dispach } = useContext(AppContex);
  const [bar, setBar] = useState(false);
  //console.log(state.msgpag);
  return (
      <div className="barcoun">
          <div className={bar ? "sideBar showbar" : "sideBar"}>
              
          </div>
      <div className="barhed">
        <div
          onClick={() => setBar(!bar)}
          className={bar ? "togglebtn ON" : "togglebtn"}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className="searchBox">
          <input type="search" placeholder=" Search.. " />
        </div>
          </div>
      <div className="allusers">
              {/* User bar */}
              
        <div onClick={()=>{dispach({type:"MSGPAGE",value:!msgpag})}} className="usersBar">
                  <div className="userImg">
                      <div className="acttive"></div>
            <img src={photo} alt="" />
          </div>
          <div className="userdigials">
            <div className="Name">
              <h3>Habib</h3>
              <p>10-12-2024</p>
            </div>
            <div className="sendMessage">
              
                <BiCheckDouble className="Tick" />
              
            </div>
          </div>
        </div>
      
      
          </div>
          
    </div>
  );
};
export default MessageBar;
