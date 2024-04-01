import { SlSettings } from "react-icons/sl";
import { LuActivitySquare } from "react-icons/lu";
import { GoMoon } from "react-icons/go";
import { VscReport } from "react-icons/vsc";
import { PiUserSwitchFill } from "react-icons/pi";
import { ImExit } from "react-icons/im";
import { LuSunMoon } from "react-icons/lu";
import { AppContex } from "../../lib/Reducher";
import { useContext } from "react";


const MoreOption = () => {
      const {state,dispach } = useContext(AppContex);

  return (
    <div className={state.more ? "prefrance" : "prefrance OFF"}>
        
      <div className="setting"  onClick={()=>dispach({type:"BGIMG",value: !state.bgimage})}>
        <SlSettings /> <p>Setting</p>
      </div>
      <div className="yourActivity">
        <LuActivitySquare /> <p>Your activity</p>
      </div>
      <div
        className="switchAperance"
        onClick={() => dispach({ type: "THEM", value: !state.them })}
      >
        {state.them ? <GoMoon /> : <LuSunMoon />}
        <p>Switch aperance</p>
      </div>
      <div className="reaportaproblem">
        <VscReport /> <p>Reaport a problem</p>
      </div>
      <div className="switchAcount">
        <PiUserSwitchFill /> <p>Switch account</p>
      </div>
      <div className="logout">
        <ImExit />
        <p>Logout</p>
      </div>
    </div>
  );
};
export default MoreOption;
