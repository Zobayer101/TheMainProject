
import { Link } from "react-router-dom";
import nophoto from "../../assets/img/npphoto.jpg";
import {  useState } from "react";
import Inputhandel from "../../lib/InputHandel";
import ImageLoder from "../../lib/ImageLoder";
const Editprofile = () => {
  interface dataInterfase{
    photo: string,
    name: string,
    Bio:string
  }
  const [userData, setUserData] = useState<dataInterfase>({ photo:"", name: "", Bio: "" });
  // const [photo, setPhoto] = useState("");
  const { photo, name, Bio } = userData;
  
  console.log(userData);
  const FileData = async (file:File) => {
    //this is a base64 converter
    const imagefile:any = await ImageLoder(file);
    setUserData((pre) => ({
      ...pre,
      photo:imagefile
   }))
   
  }
  return (
    <div className="EditCoun">
      <div className="editContent">
        <div className="editprofile">Edit Profile</div>
        <div className="PhotoName">
          <div className="photo">
            <div className="innerSide">
              <input type="file" accept=".png , .jpg ,.jpeg" onChange={(e)=> FileData(e.target.files[0]) } />
              <img src={photo || nophoto} alt="" />
            </div>
            <div className="texts">change photo</div>
          </div>
          <div className="UserName">
            <textarea
              value={name}
              placeholder="Enter your new name..."
              onChange={(e) => Inputhandel("name", e.target.value, setUserData)}
            ></textarea>
            <div className="changeName">Change your name</div>
          </div>
        </div>
        <div className="BioEdit">
          <textarea value={Bio} placeholder="write your bio.." onChange={(e)=>Inputhandel("Bio",e.target.value,setUserData)}></textarea>
          <div className="Bio"> Write Bio </div>
        </div>
        <div className="tobtn">
          <Link to={"/profile"}>
            <button className="btn1">Cancile</button>
          </Link>

          <button className="btn2">Save</button>
        </div>
      </div>
    </div>
  );
};
export default Editprofile;
