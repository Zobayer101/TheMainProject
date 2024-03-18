import Navigator from "./Navigator";
import { createContext, useReducer, } from "react";
export const ThemainContext = createContext({});
import Initalvalue from "../lib/Initalvalue";
import Reducher from "../lib/Reducher";
const Gobal = () => {
  const [count, dispach] = useReducer(Reducher, Initalvalue);
  
  const { counter, them } = count;
  return (
    <div>
      <div className={them?"Light":"Drack"}>
        {/* <button onClick={() => dispach({ type: "INCREMANT", value: 1 })}>
          click {counter}
  </button>*/}
        <button onClick={() => dispach({ type: "THEM", value: !them })}>
          click {them ? "true" : "false"}
        </button> 
        <ThemainContext.Provider value={{ counter }}>
          <Navigator />
        </ThemainContext.Provider>
      </div>
    </div>
  );
};
export default Gobal;
