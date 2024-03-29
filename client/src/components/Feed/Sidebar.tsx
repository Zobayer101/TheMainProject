import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegCompass } from "react-icons/fa6";
import { FaClapperboard } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import nophoto from "../../assets/img/npphoto.jpg";

const SideBar = () => {
  return (
    <div className="BarCoun">
      <div className="Logo">LOGO</div>
      <div className="home">
        <MdHomeFilled />
        <p>Home</p>
      </div>
      <div className="Search">
        <IoIosSearch />
        <p>Search</p>
      </div>
      <div className="explor">
        <FaRegCompass />
        <p>Explor</p>
      </div>
      <div className="video">
        <FaClapperboard />
        <p>Reels</p>
      </div>
      <div className="message">
        <IoIosSend />
        <p>Message</p>
      </div>
      <div className="Notify">
        <FaRegHeart />
        <p>Notification</p>
      </div>
      <div className="create">
        <FaRegPlusSquare />
        <p>Create</p>
      </div>
      <div className="profile">
        <img src={nophoto} alt="" />
        <p>Profile</p>
      </div>
      <div className="more">
              <FaBars />
              <p>More</p>
      </div>
    </div>
  );
};

export default SideBar;
