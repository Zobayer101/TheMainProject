
import { useContext } from "react";
import { AppContex } from "../../lib/Reducher";
import { FaFileImage } from "react-icons/fa6";
const CreatePost = () => {
    const { state } = useContext(AppContex);

  if(!state.postData) return null
    
    return (
      <div className={state.postData ? "PostCon" : "disable"}>
        <div className="mainContuner">
          <div className="header">
            <p>Create a new post</p>
          </div>
          <hr />
          <div className="mainBody">
                    <FaFileImage className="IMG" />
                    <p>Choose your won photo</p>
                    <button>
                        <input type="file" accept=".jpeg , .png , .jpg" />
                        Select your photo</button>
          </div>
        </div>
      </div>
    );
}

export default CreatePost;