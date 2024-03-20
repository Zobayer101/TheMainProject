import { BsThreeDots } from "react-icons/bs";
import myphoto from "../../assets/img/habib.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShareForwardFill } from "react-icons/ri";
import { FaComment } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
const Post = () => {
  return (
    <div>
      <div className="Posts">
        <div className="profileHed">
          <div className="imgs">
            <div className="active">
              <div className="border"></div>
            </div>
            <img src={myphoto} alt="profile photo" />
            <div className="text">
              <h3>md habib</h3>
              <p>Time</p>
            </div>
          </div>
          <div className="dots">
            <BsThreeDots />
          </div>
        </div>
        <div className="profileinfo">
          <img src={myphoto} alt="postImage" />
          <div className="commentSection">
            <div className="showcomDitls">
              <div className="like">
                <p>20k</p>
              </div>
              <div className="comment">
                <p>2k</p>
              </div>
              <div className="shear">
                <p>253 </p>
              </div>
            </div>
            <hr />
            <div className="pushlike">
              <div className="like">
                <IoMdHeartEmpty />
              </div>
              <div className="comment">
                <FaComment />
              </div>
              <div className="shere">
                <RiShareForwardFill />
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="viewmore">
          <div className="writeacomment">
            <img src={myphoto} alt="writer comment" />
            <input type="text" placeholder="write a comment..." />
            <IoSend className="sendCom" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
