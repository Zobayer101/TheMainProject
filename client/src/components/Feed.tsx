import MainFeed from "./Feed/MainFeed";
import SideBar from "./Feed/Sidebar";
import MoreOption from "./functionality/MoreOption";


const Feed = () => {
  return (
    <div className="FeedCon">
      <MoreOption/>
      <div className="Sidebar">
        <SideBar />
      </div>
      <div className="mainsection">
        <MainFeed />
      </div>
    </div>
  );
};

export default Feed;
