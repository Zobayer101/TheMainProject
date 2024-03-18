import { BsThreeDots } from "react-icons/bs";
import myphoto from "../../assets/img/habib.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShareForwardFill } from "react-icons/ri";
import { FaComment } from "react-icons/fa";

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
            <hr />
          <div className="commentSection">
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
              <div className="viewmore">
                  <p>view more comment</p>
                  
              </div>
      </div>
    </div>
  );
};
export default Post;
