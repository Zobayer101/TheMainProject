import React, { createContext } from "react";
interface State {
  counter: number;
  them: boolean;
  nextpage: boolean;
  msgpag: boolean;
  form: object;
}
type Action =
  | { type: "INCREMANT"; value: number }
  | { type: "THEM"; value: boolean }
  | { type: "NEXTPAGE"; value: boolean }
  | { type: "MSGPAGE"; value: boolean }
  | { type: "FORM"; value:object};

const Initalvalue: State = {
  counter: 30,
  them: false,
  nextpage: false,
  msgpag: false,
  form: {
    fname: "",
    lname: "",
    email: "",
    password: "",
    date: "",
    city: "",
    gender: "",
  },
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
    case "FORM":
      return {
        ...state, form: action.value
      };
    default:
      return state;
  }
};
export { Reducher, AppContex, Initalvalue };
