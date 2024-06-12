
import nophoto from "../../assets/img/npphoto.jpg";
import {  useContext } from "react";
import Inputhandel from "../../lib/InputHandel";
import ImageLoder from "../../lib/ImageLoder";
import { AppContex } from "../../lib/Reducher";
import { DataContex } from "../Gobal";
import PutData from "../../lib/Put";
const Editprofile = () => {

  const { state, dispach } = useContext(AppContex);
  const {data:{lname,Photo,Bio},setData } = useContext(DataContex);
  // interface dataInterfase{
  //   photo: string,
  //   name: string,
  //   Bio:string
  // }
  // const [userData, setUserData] = useState<dataInterfase>({ photo:"", name: "", Bio: "" });
  
  // const { photo, name, Bio } = userData;
  
  
  const FileData = async (file:File) => {
    //this is a base64 converter
    const imagefile:any = await ImageLoder(file);
    setData((pre) => ({
      ...pre,
      Photo:imagefile
   }))
   
  }
  const SendProData = async() => {
    const token = localStorage.getItem("token")?.split(`"`)[1];
    if (token) {
      
      const url = "http://localhost:3300/route/api/user/profiledata";
      const msg = await PutData(url, { lname,Photo, Bio },token);
     
      if (msg.data.acknowledged) {
        dispach({ type: "PRODATA", value: false });
      }
    }

  };
  const Cancile = () => {
    dispach({ type: "PRODATA", value: false })
    setData((pre) => ({
      ...pre,
      Photo:""
    }))
  }
  
   
  
  return (
    <div className={state.proData?"EditCoun":"EditCoun OFF"}>
      <div className="editContent">
        <div className="editprofile">Edit Profile</div>
        <div className="PhotoName">
          <div className="photo">
            <div className="innerSide">
              <input type="file" accept=".png , .jpg ,.jpeg" onChange={(e)=> FileData(e.target.files[0]) } />
              <img src={Photo || nophoto} alt="" />
            </div>
            <div className="texts">change photo</div>
          </div>
          <div className="UserName">
            <textarea
              value={lname}
              placeholder="Enter your new name..."
              onChange={(e) => Inputhandel("lname", e.target.value, setData)}
            ></textarea>
            <div className="changeName">Change your name</div>
          </div>
        </div>
        <div className="BioEdit">
          <textarea value={Bio} placeholder="write your bio.." onChange={(e)=>Inputhandel("Bio",e.target.value,setData)}></textarea>
          <div className="Bio"> Write Bio </div>
        </div>
        <div className="tobtn">
         
          <button onClick={()=> Cancile()} className="btn1">Cancile</button>
         

          <button className="btn2" onClick={()=> SendProData()}>Save</button>
        </div>
      </div>
    </div>
  );
};
export default Editprofile;
