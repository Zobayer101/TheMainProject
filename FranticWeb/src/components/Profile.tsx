import { FaPlus } from "react-icons/fa6";
import coverphoto from "../assets/img/Fer.jpg";
import profile from "../assets/img/habib.png";
import { IoCameraReverseOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";


const Profile = () => {
  return (
    <div>
      <div className="profileCon">
        <div className="header"></div>
        {/* cover photo section start */}
        <div className="CoverPhoto">
          <div className="cover">
            <img src={coverphoto} alt="coverphoto" />
            <div className="CamIcon">
              <IoCameraReverseOutline className="cam" />
              <p>Edit cover photo</p>
            </div>
          </div>
          <div className="profileP">
            <div className="photo">
              <img src={profile} alt="profilePhoto" />
            </div>
            <div className="flowlers">
              <div className="names">
                <h3>Md Habib </h3>
              </div>
              <div className="flow">
                <h4>200k </h4>
                <p>flower</p>
              </div>
            </div>
            <div className="TowButtton">
              <button className="addstory">
                <FaPlus />
                add story
              </button>
              <button className="editProfile">
                <FaRegPenToSquare />
                create profile
              </button>
            </div>
          </div>
          <hr />
        </div>
        {/* cover section end  */}

        <div className="Ditials">
          <div className="aboutyourself"></div>
          <div className="showFirends"></div>
        </div>
        <div className="showAllPost"></div>
      </div>
    </div>
  );
};

export default Profile;
