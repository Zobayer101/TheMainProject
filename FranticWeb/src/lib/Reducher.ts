// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Reducher = (satate: any, action: { type: string; value: any }) => {
  switch (action.type) {
    case "INCREMANT":
      return { ...satate, counter: satate.counter + action.value };
    case "THEM":
      return { ...satate, them :action.value };
    default:
      return satate;
  }
};
export default Reducher;
