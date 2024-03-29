import Sussagesd from "./Sussagested";
import nophoto from "../../assets/img/npphoto.jpg";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import Post from "./Post";

const MainFeed = () => {
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
              <div className="innerIMG">
                <img src={nophoto} alt="nophoto" />
              </div>
            </div>

            <div className="Outerimg">
              <div className="innerIMG">
                <img src={nophoto} alt="nophoto" />
              </div>
            </div>
            <div className="Outerimg">
              <div className="innerIMG">
                <img src={nophoto} alt="nophoto" />
              </div>
            </div>
            <div className="Outerimg">
              <div className="innerIMG">
                <img src={nophoto} alt="nophoto" />
              </div>
            </div>
                  </div>
               <Post/>   
        </div>
      </div>
      <div className="sussagedfirend">
        <Sussagesd />
      </div>
    </div>
  );
};
export default MainFeed;
