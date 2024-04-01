import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegCompass } from "react-icons/fa6";
import { FaClapperboard } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import nophoto from "../../assets/img/npphoto.jpg";
import { Link } from "react-router-dom";
import { AppContex } from "../../lib/Reducher";
import { useContext } from "react";
const SideBar = () => {
  const { state, dispach } = useContext(AppContex);
  
  return (
    <div className="BarCoun">
      <div className="Logo">LOGO</div>
      <Link to={"/"}>
      
      <div className="home">
        <MdHomeFilled />
        <p>Home</p>
      </div>
      </Link>
      <Link to={"#"}>
      <div className="Search">
        <IoIosSearch />
        <p>Search</p>
      </div>
      </Link>
      <Link to={"#"}>
      <div className="explor">
        <FaRegCompass />
        <p>Explor</p>
      </div>
      </Link>
      <Link to={"#"}>
      <div className="video">
        <FaClapperboard />
        <p>Reels</p>
      </div>
      </Link>
      <Link to={"/message"}>
      <div className="message">
        <IoIosSend />
        <p>Message</p>
      </div>
      </Link>
      <Link to={"#"}>
      <div className="Notify">
        <FaRegHeart />
        <p>Notification</p>
      </div>
      </Link>
      <Link to={"#"}>
      <div className="create">
        <FaRegPlusSquare />
        <p>Create</p>
      </div>
      </Link>
        <Link to={"/profile"}>
      <div className="profile">

        <img src={nophoto} alt="" />
        <p>Profile</p>
      </div>
      </Link>
      <Link to={"#"}>
      <div className="more" onClick={()=> dispach({type:"MORE", value:!state.more})} >
              <FaBars />
              <p>More</p>
      </div>
      </Link>
    </div>
  );
};

export default SideBar;
