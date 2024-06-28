import { useNavigate } from "react-router-dom";
import MainFeed from "./Feed/MainFeed";
import SideBar from "./Feed/Sidebar";
import MoreOption from "./functionality/MoreOption";
import { useEffect } from "react";


const Feed = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const stor = localStorage.getItem("userDitials");
    if (stor) {
      //console.log(stor);
      // Navigate("/login");
    } else {
      navigate("/login");
    }
  })
  return (
    <div className="FeedCon">
      <MoreOption/>
      <div className="Sidebar">
        <SideBar />
      </div>
      <div className="mainsection">
        <MainFeed />
      </div>
    </div>
  );
};

export default Feed;
