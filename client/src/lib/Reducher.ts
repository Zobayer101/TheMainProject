import React, { createContext } from "react";
interface State {
  counter: number;
  them: boolean;
  nextpage: boolean;
  msgpag: boolean;
  more: boolean;
  bgimage: boolean;
  setimge: string;
  
}
type Action =
  | { type: "INCREMANT"; value: number }
  | { type: "THEM"; value: boolean }
  | { type: "NEXTPAGE"; value: boolean }
  | { type: "MSGPAGE"; value: boolean }
  | { type: "MORE"; value: boolean }
  | { type: "BGIMG"; value: boolean }
  | { type: "SETIMGE"; value:string};

const Initalvalue: State = {
  counter: 30,
  them: false,
  nextpage: false,
  msgpag: false,
  more: false,
  bgimage: false,
  setimge:"image",
};

const AppContex = createContext<{
  state: State;
  dispach: React.Dispatch<Action>;
}>({
  state: Initalvalue,
  dispach: () => {},
});
const Reducher = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMANT":
      return { ...state, counter: state.counter + action.value };
    case "THEM":
      return { ...state, them: action.value };
    case "NEXTPAGE":
      return { ...state, nextpage: action.value };
    case "MSGPAGE":
      return { ...state, msgpag: action.value };
    case "MORE":
      return { ...state, more: action.value };
    case "BGIMG":
      return { ...state, bgimage: action.value };
    case "SETIMGE":
      return { ...state, setimge :action.value};
    default:
      return state;
  }
};
export { Reducher, AppContex, Initalvalue };
