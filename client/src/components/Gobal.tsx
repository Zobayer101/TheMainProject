import Navigator from "./Navigator";
import {  useReducer, } from "react";


import { Reducher, AppContex, Initalvalue } from "../lib/Reducher";
const Gobal:React.FC = () => {
  const [state, dispach] = useReducer(Reducher, Initalvalue);
  
  const {  them } = state;
  return (
    <div>
      <div className={them ? "Light" : "Drack"}>
        {/* <button onClick={() => dispach({ type: "INCREMANT", value: 1 })}>
          click {counter}
  </button>*/}
        {/* <button onClick={() => dispach({ type: "THEM", value: !them })}>
          click {them ? "true" : "false"}
        </button> */}
        <AppContex.Provider  value={{state, dispach} }>
          <Navigator />
        </AppContex.Provider>
      </div>
    </div>
  );
};
export default Gobal;
