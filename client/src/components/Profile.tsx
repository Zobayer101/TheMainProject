import SideBar from "./Feed/Sidebar";
import MoreOption from "./functionality/MoreOption";
import photo from "../assets/img/npphoto.jpg";
import { TfiSettings } from "react-icons/tfi";
import { CiCirclePlus } from "react-icons/ci";
import { BsGrid3X3 } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GetUser from "../lib/Get";

const Profile = () => {
  const Navigate = useNavigate();
  useEffect(() => {
  const stor = localStorage.getItem("userDitials");
  const token = localStorage.getItem("token");
  const url = "http://localhost:3300/route/api/user/retrive";
    if (stor&&token) {
      //const {ID,token } = stor;
      (async () => {
        
        const data = await GetUser(url, token.split(`"`)[1]);
        console.log(data);
      })()
      
    } else {
      Navigate("/login");
    }
  });


  //Navigate("/message");
  return (
    <div className="profileCon">
      <MoreOption />
      <div className="SideBar">
        <SideBar />
      </div>
      <div className="mainSection">
        <div className="countuner">
          <div className="Head">
            <div className="aboutSection">
              <div className="photo">
                <img src={photo} alt="" />
              </div>
              <div className="ditials">
                <div className="aboutName">
                  <div className="text">mdzobayer</div>
                  <div className="button">
                    <Link to={"/Editprofile"}>
                      <button>Edit profile</button>
                    </Link>

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
                  <div className="wonername">mdzobayer</div>
                  <div className="fullBio">hello and wellcome</div>
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
