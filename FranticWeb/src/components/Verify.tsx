import { useEffect, useRef, useState } from "react";
import { IoShieldCheckmark } from "react-icons/io5";

const Verify = () => {
  const [err, setErr] = useState({ OK: "" });
  const [counter, setCounter] = useState(100);
  const [digit, setDigit] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
  });
  const { num1, num2, num3, num4, num5 } = digit;
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const { num1, num2, num3, num4, num5 } = digit;

    if (!num1) {
      !num2 && !ref2.current?.hasAttribute("disabled")
        ? ref2.current?.setAttribute("disabled", "")
        : "";
      ref1.current!.focus();
    } else if (num1 && !num2) {
      !num3 && !ref3.current?.hasAttribute("disabled")
        ? ref3.current?.setAttribute("disabled", "")
        : ref2.current?.removeAttribute("disabled");
      ref2.current!.focus();
    } else if (num2 && !num3) {
      !num4 && !ref4.current?.hasAttribute("disabled")
        ? ref4.current?.setAttribute("disabled", "")
        : ref3.current?.removeAttribute("disabled");
      ref3.current!.focus();
    } else if (num3 && !num4) {
      !num5 && !ref5.current?.hasAttribute("disabled")
        ? ref5.current?.setAttribute("disabled", "")
        : ref4.current?.removeAttribute("disabled");
      ref4.current!.focus();
    } else if (num4 && !num5) {
      ref5.current?.removeAttribute("disabled");
      ref5.current!.focus();
    }
    if (num1 && num2 && num3 && num4 && num5) {
      //alert('ok')
      setErr((pre) => ({
        ...pre,
        OK: "error",
      }));
    }
  }, [setErr, digit]);
    useEffect(() => {
        
        const timer: number = setInterval(() => {
            setCounter((pre) => pre - 1)
        }, 1000);
        if (counter < 1) clearInterval(timer);
        return () => {
            clearInterval(timer);
        }
    },[setCounter,counter])

  const DigitHandel = (propaty: keyof typeof digit, value: string) => {
    if (digit[propaty].length < 1 || value == "") {
      setDigit((pre) => ({
        ...pre,
        [propaty]: value,
      }));
    }
  };

  console.log(digit);

  return (
    <div>
      <div className="verifycover">
        <div className="varifybox">
          <div className="varifyHead">
            <div className="logo">
              <IoShieldCheckmark className="userVlid" />
            </div>
            <div className="text">
              <h2>Enter your OTP</h2>
            </div>
          </div>
          <div className="infobox ">
            <div className={counter ? "timer" : " timer out"}>
              {counter ? "Your time now " : "Time out "}
              {counter}
            </div>
            <div
              className={err.OK == "error" ? "inputBox Errors " : "inputBox"}
              id={err.OK == "OK" ? "OK" : ""}
            >
              <input
                ref={ref1}
                value={num1}
                onChange={(e) => DigitHandel("num1", e.target.value)}
                type="number"
              />
              <input
                ref={ref2}
                value={num2}
                onChange={(e) => DigitHandel("num2", e.target.value)}
                type="number"
                disabled
              />
              <input
                ref={ref3}
                value={num3}
                onChange={(e) => DigitHandel("num3", e.target.value)}
                type="number"
                disabled
              />
              <input
                ref={ref4}
                value={num4}
                onChange={(e) => DigitHandel("num4", e.target.value)}
                type="number"
                disabled
              />
              <input
                ref={ref5}
                value={num5}
                onChange={(e) => DigitHandel("num5", e.target.value)}
                type="number"
                disabled
              />
            </div>
            <div className="resend" onClick={()=> setCounter(100)}>Resend code?</div>
            <div className="submit">
              <button>verify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Verify;
