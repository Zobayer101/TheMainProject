import { LuFileEdit } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import myphoto from "../../assets/img/habib.png";
import { BiFirstAid } from "react-icons/bi";
import { MdVideoCameraFront } from "react-icons/md";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { GiFlyingFlag } from "react-icons/gi";
import Post from "./Post";

const ProfileEnd = () => {
  return (
    <div>
      <div className="Ditals">
        <div className="ContU">
          <div className="Bio">
            <div className="intro">
              <div className="TextIntor">Intro</div>
              <div className="intorbutton">add bio</div>
              <div className="content">
                <p>status single</p>
                <p>work ata stdunts</p>
                <p>work ata stdunts</p>
                <p>subject coumbuter scince</p>
                <p>went to wone collage</p>
                <p>and side job none</p>
                <p>plaing business</p>
                <p>livine in rajshahhi</p>
              </div>
              <div className="editDtils">
                <LuFileEdit className="Ed" />
                edit ditalis
              </div>
              <div className="addfirnds">
                <IoIosAddCircleOutline className="Ad" />
                add firends
              </div>
            </div>
          </div>
          <div className="myphoto">
            <div className="myphotogallary">
              <div className="photobutton">
                <h4>Photos</h4>
                <p>show all photo..</p>
              </div>
              <div className="Pg">
                <div className="allphotos">
                  <img src={myphoto} alt="myimg1" />
                  <img src={myphoto} alt="myimg2" />
                  <img src={myphoto} alt="myimg3" />
                  <img src={myphoto} alt="myimg4" />
                  <img src={myphoto} alt="myimg5" />
                  <img src={myphoto} alt="myimg6" />
                </div>
              </div>
            </div>
          </div>
          <div className="myfirend">
            <div className="firendgallary">
              <div className="firendgallary">
                <div className="num">
                  <h4>Firends</h4>
                  <p>243k firends</p>
                </div>
                <p>see all firends..</p>
              </div>
              <div className="Pg">
                <div className="allphotos">
                  <img src={myphoto} alt="myimg1" />
                  <div className="firendName">habib</div>
                </div>

                <div className="allphotos">
                  <img src={myphoto} alt="myimg1" />
                  <div className="firendName">habib</div>
                </div>

                <div className="allphotos">
                  <img src={myphoto} alt="myimg1" />
                  <div className="firendName">habib</div>
                </div>

                <div className="allphotos">
                  <img src={myphoto} alt="myimg1" />
                  <div className="firendName">habib</div>
                </div>

                <div className="allphotos">
                  <img src={myphoto} alt="myimg1" />
                  <div className="firendName">habib</div>
                </div>

                <div className="allphotos">
                  <img src={myphoto} alt="myimg1" />
                  <div className="firendName">habib</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Footer">
            <div className="Footbox">
              <div className="header">
                <h4>Life event</h4>
                <p>see all</p>
              </div>
              <div className="lifeEvent">
                <div className="carearevent">
                  <BiFirstAid className="bif" />
                </div>
                <div className="profileevent">
                  <BiFirstAid className="bif" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="outerAll">

        <div className="AllPost">
          <div className="postcountuner">
            <div className="think">
              <div className="photo">
                <img src={myphoto} alt="" />
                <div className="whatDoyouThink">
                  <p>what's do you think?</p>
                </div>
              </div>
              <hr />
              <div className="icon">
                <div className="livevideo">
                  <MdVideoCameraFront />
                </div>
                <div className="photsvideo">
                  <LiaPhotoVideoSolid />
                </div>
                <div className="lifeevents">
                  <GiFlyingFlag />
                </div>
              </div>
            </div>
            <div className="posts">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileEnd;
