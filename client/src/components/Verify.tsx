import { useEffect, useRef, useState } from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PostData from "../lib/Post";

const Verify = () => {
  const [err, setErr] = useState({ OK: "", enable: "" });
  const [counter, setCounter] = useState(100);
  const [digit, setDigit] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
  });
  const Navigate = useNavigate();
  const { num1, num2, num3, num4, num5 } = digit;
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const { num1, num2, num3, num4, num5 } = digit;
setErr((pre) => ({
  ...pre,

  OK: "",
}));
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
      const otp: number = Number(Object.values(digit).join(""));
      const url: string = "http://localhost:3300/route/api/otp/user/verify";
      (async () => {
        const store = localStorage.getItem("userDitials");
        if (!store) {
          console.log("goto signup");
        } else {
          const { ID } = JSON.parse(store);

          const data = await PostData(url, { ID, otp });
          if (!data.token) {
            setErr((pre) => ({
              ...pre,

              OK: "error",
            }));
            //alert(JSON.stringify(data.msg));
          } else {
            localStorage.setItem('token', JSON.stringify(data.token));
            console.log(data.token);
            setErr((pre) => ({
              ...pre,
  
              OK: "OK",
            }));
            
          }
        }
      })();

      setErr((pre) => ({
        ...pre,

        enable: "enable",
      }));
    }
  }, [setErr, digit]);
  useEffect(() => {
      if (err.OK == "OK") {
        setTimeout(() => {
          Navigate("/profile");
        }, 2000);
      }
    const timer: number = setInterval(() => {
      setCounter((pre) => pre - 1);
    }, 1000);
    if (counter < 1) {
      clearInterval(timer)
    }
  
    return () => {
      clearInterval(timer);
    };
  }, [setCounter, counter,err,Navigate]);

  const DigitHandel = (propaty: keyof typeof digit, value: string) => {
    if (digit[propaty].length < 1 || value == "") {
      setDigit((pre) => ({
        ...pre,
        [propaty]: value,
      }));
    }
  };

  if (!localStorage.getItem("userDitials")) return Navigate("/signpu");
  const store = localStorage.getItem("userDitials");
  if (!store) {
    console.log("data not exist");
  } else {
    const { ID } = JSON.parse(store);
    console.log(ID);
  }

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
            <div className="resend" onClick={() => setCounter(100)}>
              Resend code?
            </div>
            <div className="submit">
              <button
                className={err.enable == "enable" ? "verify enable" : "verify"}
              >
                verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Verify;
