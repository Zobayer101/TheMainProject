import { BrowserRouter ,Routes,Route} from "react-router-dom";

import Notfound from "./Notfound";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Message from "./Message";
import Feed from "./Feed";
import Verify from "./Verify";
import Editprofile from "./profile/Editprofile";

const Navigator = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/message" element={<Message />} />
            <Route path="/Editprofile" element={ <Editprofile/>} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Navigator;