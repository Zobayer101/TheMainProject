import Navigator from "./Navigator";
import { useReducer, useState } from "react";
import React from "react";
interface Datatype {
  fname: string;
  lname: string;
  email: string;
  date: string;
  city: string;
  geander: string;
  Photo: string;
  follower: string;
  following: string;
  Bio: string;
}
import { Reducher, AppContex, Initalvalue } from "../lib/Reducher";
export const DataContex = React.createContext<{
  data: Datatype;
  setData: React.Dispatch<React.SetStateAction<Datatype>>;
}>({
  data: {
    fname: "",
    lname: "",
    email: "",
    date: "",
    city: "",
    geander: "",
    Photo: "",
    follower: "",
    following: "",
    Bio: "",
  },
  setData: () => {},
});
const Gobal: React.FC = () => {
  const [state, dispach] = useReducer(Reducher, Initalvalue);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    date: "",
    city: "",
    geander: "",
    Photo: "",
    follower: "",
    following: "",
    Bio:""
  });

  const { them } = state;
  return (
    <div>
      <div className={them ? "Light" : "Drack"}>
        <AppContex.Provider value={{ state, dispach }}>
          <DataContex.Provider value={{ data, setData }}>
            <Navigator />
          </DataContex.Provider>
        </AppContex.Provider>
      </div>
    </div>
  );
};
export default Gobal;
