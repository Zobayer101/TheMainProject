import React, { createContext } from "react";
interface State{
  counter: number;
  them: boolean;
  nextpage: boolean;
}
type Action =
  | { type: "INCREMANT"; value: number }
  | { type: "THEM"; value: boolean }
  | { type: "NEXTPAGE", value: boolean };
  
  const Initalvalue: State = {
    counter: 30,
    them: false,
    nextpage: false,
  };


const AppContex = createContext<{ state: State; dispach: React.Dispatch<Action> }>({
  state: Initalvalue,
  dispach:()=>{}
})
const Reducher = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "INCREMANT":
      return { ...state, counter: state.counter + action.value };
    case "THEM":
      return { ...state, them: action.value };
    case "NEXTPAGE":
      return { ...state, nextpage: action.value };
    default:
      return state;
  }
};
export { Reducher, AppContex, Initalvalue };
