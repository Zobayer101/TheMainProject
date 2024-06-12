
import { useContext } from "react";
import { FaFileImage } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import ImageLoder from './../../lib/ImageLoder';
import { ImCancelCircle } from "react-icons/im";
import PostData from "../../lib/Post";
import { AppContex } from "../../lib/Reducher";
import { useState } from "react";
import { json } from "react-router-dom";
const CreatePost = () => {

    const { state ,dispach} = useContext(AppContex);
  const [create, setCreate] = useState({ photo: "", next: "", posts: "" });
  
  const ImageViews =async(file:File) => {
    const ImageConvert:any = await ImageLoder(file);
    setCreate({photo:ImageConvert});
  }
  const SendPost = async () => {
    const token = localStorage.getItem("token")?.split(`"`)[1];
    if (token) {
      const url = `http://localhost:3300/route/api/postusers`;
      const postsData = await PostData(url, { image: create.photo, text: create.posts }, token);
      postsData ? dispach({ type: "POSTDATA", value: false }) :
        alert("post uploding error ..");
    } else {
     console.log('error')
    }
    
  }
  if(!state.postData) return null
    
    return (
      <div className={state.postData ? "PostCon" : "disable"}>
        <div className="mainContuner">
          <div className="header">
            <p>Create a new post</p>
            <ImCancelCircle
              className="cancile"
              onClick={() => {
                dispach({ type: "POSTDATA", value: false });
                setCreate({ photo: "", next: "" });
              }}
            />
          </div>
          <hr />
          <div className="mainBody">
            {create.photo ? (
             
                create.next ? (
                <>
                  <div className="postnow">
                    <textarea name="post" id="post" onChange={(e) => setCreate((pre) => ({
                      ...pre,
                      posts: e.target.value
                    }))} autoFocus></textarea>
                    <button className="btnPost" onClick={()=>{SendPost()}}>post now</button>
                  </div>
                </>
                ):(
                <>
                  <div className="boundary">
                    <img src={create.photo} alt="" />
                    <div className="towbtn">
                      <GrLinkPrevious
                        className="pre"
                        onClick={() => setCreate({ photo: "" })}
                      />
                      <GrLinkNext
                        className="next"
                          onClick={() => setCreate((pre) =>({
                            ...pre,
                            next:"true"
                        }))}
                      />
                    </div>
                  </div>
                </>
                )
              
            ) : (
              <>
                <FaFileImage className="IMG" />
                <p>Choose your won photo</p>
                <button>
                  <input
                    type="file"
                    accept=".jpeg , .png , .jpg"
                    onChange={(e) => ImageViews(e.target.files[0])}
                  />
                  Select your photo
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default CreatePost;