import Sussagesd from "./Sussagested";
import nophoto from "../../assets/img/npphoto.jpg";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
import GetUser from "../../lib/Get";
 import { useContext,useEffect, useState } from "react";
import { DataContex } from "../Gobal";
import Loading from "../Loading";


const MainFeed = () => {
  const { setData } = useContext(DataContex);
   const [post, setPost] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    const stor = localStorage.getItem("userDitials");
    const token = localStorage.getItem("token");
    const url = "http://localhost:3300/route/api/user/retrive";
    const url2 = "http://localhost:3300/route/api/user/suggest";
    if (stor && token) {
      //const {ID,token } = stor;
      (async () => {
        const data = await GetUser(url, token.split(`"`)[1]);
        const PostData = await GetUser(url2, token.split(`"`)[1]);
       setData ({
          fname: data.fname,
          lname: data.lname,
          email: data.email,
          date: data.dateofbarth,
          city: data.city,
          geander: data.geander,
          Photo: data.Photo,
          follower: data.follower,
          following: data.following,
          Bio: data.Bio,
        });
        setPost(PostData);
      })();
    } else {
      Navigate("/login");
    }
  }, [Navigate, setData]);
  if (!post) return (
   Loading()
  )
  return (
    <div className="feedDividor">
      <div className="FeedCountuner">
        <div className="feedhub">
          <div className="Head">
            <div className="previus">
              <CiCircleChevLeft />
            </div>
            <div className="next">
              <CiCircleChevRight />
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">Name</div>
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">what's Name</div>
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">Name</div>
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">Name</div>
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">Name</div>
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">Name</div>
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">Name</div>
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">Name</div>
            </div>

            <div className="Outerimg">
              <div className="innerCount">
                <div className="innerIMG">
                  <img src={nophoto} alt="nophoto" />
                </div>
              </div>
              <div className="texts">Name</div>
            </div>
          </div>
          {
            post.map((value, index) => (
              
              <Post key={index} Data={value} />
            ))
          }
          
        </div>
      </div>
      <div className="sussagedfirend">
        <Sussagesd />
      </div>
    </div>
  );
};
export default MainFeed;
