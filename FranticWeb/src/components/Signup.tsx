import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContex } from "../lib/Reducher";
import Inputhandel from "../lib/InputHandel";

const Signup = () => {
  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    Cpass: "",
    date: "",
    city: "",
    gendar: "",
    //error part
    fnameErr: "",
    lnameErr: "",
    emailErr: "",
    passwordErr: "",
    CpassErr: "",
    dateErr: "",
    gendarErr: "",
  });
  const {
    fname,
    lname,
    email,
    password,
    Cpass,
    date,
    city,
    gendar,
    fnameErr,
    lnameErr,
    emailErr,
    passwordErr,
    CpassErr,
    dateErr,
    gendarErr,
  } = formdata;
  const {
    dispach,
    state: { nextpage },
  } = useContext(AppContex);
  const PreviusButton = () => {
    dispach({ type: "NEXTPAGE", value: false });
  };
  const NextButton = () => {
    //regex for email validation
    const regex = /\S+@\S+\.\S+/;

    if (fname.length < 2) {
      setFormdata((pre) => ({ ...pre, fnameErr: "err" }));
    } else {
      setFormdata((pre) => ({ ...pre, fnameErr: "" }));
    }
    if (lname.length < 3) {
      setFormdata((pre) => ({ ...pre, lnameErr: "err" }));
    } else {
      setFormdata((pre) => ({ ...pre, lnameErr: "" }));
    }
    if (password.length < 6) {
      setFormdata((pre) => ({ ...pre, passwordErr: "err" }));
    } else {
      setFormdata((pre) => ({
        ...pre,
        passwordErr: "",
      }));
    }
    if (regex.test(email)) {
      setFormdata((pre) => ({ ...pre, emailErr: "" }));
    } else {
      setFormdata((pre) => ({ ...pre, emailErr: "err" }));
    }

    if (
      fnameErr == "" &&
      lnameErr == "" &&
      emailErr == "" &&
      passwordErr == ""
    ) {
      dispach({ type: "NEXTPAGE", value: true });
      console.log("ok boss");
    }
  };

  return (
    <div>
      <div className="signpuCon">
        <div className="signupbox">
          <div className={nextpage ? "mainFrom " : "mainFrom gonext"}>
            <div className="firstPart">
              <div className="intropage2nd">
                <div className="threeinput">
                  <input
                    type="password"
                    placeholder="Confrom Pass"
                    value={Cpass}
                    onChange={(e) =>
                      Inputhandel("Cpass", e.target.value, setFormdata)
                    }
                  />

                  <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                      Inputhandel("date", e.target.value, setFormdata)
                    }
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) =>
                      Inputhandel("city", e.target.value, setFormdata)
                    }
                  />
                </div>
                <div className="gender">
                  <div className="malefemale">
                    <div className="male ">
                      <label htmlFor="male">Male </label>
                      <input
                        type="radio"
                        name="gendar"
                        checked={gendar == "male"}
                        onChange={() =>
                          Inputhandel("gendar", "male", setFormdata)
                        }
                      />
                    </div>
                    <div className="female">
                      <label htmlFor="female">Female </label>
                      <input
                        type="radio"
                        name="gendar"
                        value={"female"}
                        checked={gendar == "female"}
                        onChange={() =>
                          Inputhandel("gendar", "female", setFormdata)
                        }
                      />
                    </div>
                  </div>
                  <button onClick={PreviusButton} className="previusbtn">
                    Previus
                  </button>
                </div>
              </div>
            </div>
            <div className="scoundPart">
              <div className="intropage1st">
                <div className="inp">
                  <div className={fnameErr == "err" ? "fname err" : "fname"}>
                    <input
                      type="text"
                      placeholder="First name"
                      value={fname}
                      
                      onChange={(e) =>
                        Inputhandel("fname", e.target.value, setFormdata)
                      }
                    />
                    <p>Unvalid First naem !</p>
                  </div>
                  <div className={lnameErr == "err" ? "lname err" : "lname "}>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lname}
                      onChange={(e) =>
                        Inputhandel("lname", e.target.value, setFormdata)
                      }
                    />
                    <p> Unvalid Last name !</p>
                  </div>
                  <div className={emailErr == "err" ? "email err" : "email"}>
                    <input
                      type="email"
                      placeholder="@ email"
                      value={email}
                      onChange={(e) =>
                        Inputhandel("email", e.target.value, setFormdata)
                      }
                    />
                    <p>Wrong email !</p>
                  </div>
                  <div
                    className={
                      passwordErr == "err" ? "password err" : "password"
                    }
                  >
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) =>
                        Inputhandel("password", e.target.value, setFormdata)
                      }
                    />
                    <p>password to short !</p>
                  </div>
                </div>
                <div className="Ihave">
                  <button onClick={NextButton} className="nextBtn ">
                    Next
                  </button>
                  <h4>
                    I have a account?
                    <Link to={"/login"}> Login</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
