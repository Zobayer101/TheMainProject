

const Inputhandel = (
  propaty: string,
  value: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  tuple: Function
) => {
  tuple((pre: object) => ({
    ...pre,
    [propaty]: value,
  }));
};
 
export default Inputhandel;
