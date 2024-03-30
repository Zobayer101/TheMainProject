import { BsThreeDots } from "react-icons/bs";
import photo from "../../assets/img/npphoto.jpg";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Post = () => {
  return (
    <div className="PostHub">
      <div className="postCoun">
        <div className="postHead">
          <div className="Img">
            <img src={photo} alt="" />
            <p>Name</p>
            <p>date</p>
          </div>
          <BsThreeDots />
        </div>
        <div className="postIMG">
          <img src={photo} alt="" />
        </div>
        <div className="Status">
          <div className="togather">
            <FaRegHeart className="love" />
            <FaRegComment className="comment" />
            <IoIosSend className="send" />
          </div>
          <div className="along">
            <FaRegBookmark />
          </div>
        </div>
        <div className="like">34k like</div>
        <div className="commentext">
          the_coding_wizard Master Frontend To Backend 👨‍💻 Link In Bio ✅️
        </div>
        <div className="viewComment">
          view all 23k comment
        </div>
      </div>
    </div>
  );
};

export default Post;
