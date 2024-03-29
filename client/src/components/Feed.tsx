import MainFeed from "./Feed/MainFeed";
import SideBar from "./Feed/Sidebar";

const Feed = () => {
  return (
    <div className="FeedCon">
      <div className="Sidebar">
        <SideBar/>
      </div>
      <div className="mainsection">
        <MainFeed/>
      </div>
    </div>
  );
};

export default Feed;
