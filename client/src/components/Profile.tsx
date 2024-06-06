import SideBar from "./Feed/Sidebar";
import MoreOption from "./functionality/MoreOption";
import photo from "../assets/img/npphoto.jpg";
import { TfiSettings } from "react-icons/tfi";
import { CiCirclePlus } from "react-icons/ci";
import { BsGrid3X3 } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";

import {  useNavigate } from "react-router-dom";
import { useContext} from "react";

import Editprofile from "./profile/Editprofile";
import { AppContex } from "../lib/Reducher";
import { DataContex } from "./Gobal";

const Profile = () => {
  const {  dispach} = useContext(AppContex);
  const { data} = useContext(DataContex);
  const Navigate = useNavigate();

  // chacke validation
  localStorage.getItem("token") ? "" : Navigate("/login");
  
  return (
    <div className="profileCon">
      <MoreOption />
      <div className="SideBar">
        <SideBar />
      </div>
      <div className="mainSection">
          <Editprofile/>
        <div className="countuner">
          <div className="Head">
            <div className="aboutSection">
              <div className="photo">
                <img src={data.Photo||photo} alt="" />
              </div>
              <div className="ditials">
                <div className="aboutName">
                  <div className="text">{data.fname+data.lname }</div>
                  <div className="button">
                   
                      <button onClick={()=>{dispach({type:"PRODATA", value:true})}} className="Edit">Edit profile</button>
                    

                    <button>View profile</button>
                    <TfiSettings className="setting" />
                  </div>
                </div>
                <div className="fllower">
                  <div className="post"> {"1"} post</div>
                  <div className="fllowers">{"19"} fllowers</div>
                  <div className="fllowing">{"92"} following</div>
                </div>
                <div className="bio">
                  <div className="wonername">{ data.fname}</div>
                  <div className="fullBio">{ data.Bio||"Edit Bio "}</div>
                </div>
              </div>
            </div>
            <div className="createSection">
              <div className="creates">
                <div className="Icons">
                  <CiCirclePlus />
                </div>
                <p>new</p>
              </div>
            </div>
          </div>
          <div className="postBar">
            <div className="allpost">
              <BsGrid3X3 /> posts
            </div>
            <div className="save">
              <FaRegBookmark /> saved
            </div>
            <div className="tage">
              <BiSolidUserRectangle /> tagged
            </div>
          </div>
          <div className="Allpost"></div>
          <div className="Footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
