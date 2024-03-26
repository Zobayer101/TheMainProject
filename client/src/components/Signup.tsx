import { useContext, useEffect, useState } from "react";
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
  });
  const [errors, setErrors] = useState({
    fnameErr: "",
    lnameErr: "",
    emailErr: "",
    passwordErr: "",
    CpassErr: "",
    dateErr: "",
    gendarErr: "",
    OK: "",
    changebtn: "",
    signpunow: "",
  });
  const { fname, lname, email, password, Cpass, date, city, gendar } = formdata;
  const {
    fnameErr,
    lnameErr,
    emailErr,
    passwordErr,
    CpassErr,
    dateErr,
    gendarErr,
    OK,
    changebtn,
    signpunow,
  } = errors;
  const {
    dispach,
    state: { nextpage },
  } = useContext(AppContex);

  useEffect(() => {
    //regex for email validation
    const regex = /\S+@\S+\.\S+/;
    if (fname.length > 2) {
      setErrors((pre) => ({ ...pre, fnameErr: "" }));
    }
    if (lname.length > 3) {
      setErrors((pre) => ({ ...pre, lnameErr: "" }));
    }
    if (password.length > 6) {
      setErrors((pre) => ({ ...pre, passwordErr: "" }));
    }
    if (regex.test(email)) {
      setErrors((pre) => ({ ...pre, emailErr: "" }));
    } else if (email) {
      setErrors((pre) => ({ ...pre, emailErr: "err" }));
    }
    if (Cpass.length > 6 && Cpass == password) {
      setErrors((pre) => ({ ...pre, CpassErr: "" }));
    }
    if (Cpass.length > 6 && Cpass != password) {
      setErrors((pre) => ({ ...pre, CpassErr: "err" }));
    }
    if (date.length > 3) {
      setErrors((pre) => ({ ...pre, dateErr: "" }));
    }
    if (gendar) {
      setErrors((pre) => ({ ...pre, gendarErr: "" }));
    }
    if (
      fnameErr == "" &&
      lnameErr == "" &&
      emailErr == "" &&
      passwordErr == "" &&
      fname &&
      lname &&
      email &&
      password
    ) {
      setErrors((pre) => ({ ...pre, OK: "OK" }));
    } else {
      setErrors((pre) => ({ ...pre, OK: "" }));
    }
    if (OK && Cpass == password && date && gendar) {
      setErrors((pre) => ({
        ...pre,
        signpunow: "signup",
        changebtn: "change",
      }));
    } else {
      setErrors((pre) => ({ ...pre, signpunow: "", changebtn: "" }));
    }
  }, [
    setErrors,
    fname,
    signpunow,
    lname,
    email,
    Cpass,
    password,
    fnameErr,
    lnameErr,
    emailErr,
    passwordErr,
    date,
    gendar,
    OK,
  ]);

  //previus button with signup button
  const PreviusButton = () => {
    if (!date) {
      setErrors((pre) => ({ ...pre, dateErr: "err" }));
    }
    if (!gendar) {
      setErrors((pre) => ({ ...pre, gendarErr: "err" }));
    }
    if (signpunow == "signup") {
      alert("post all data");
    } else {
      dispach({ type: "NEXTPAGE", value: false });
    }
  };
  const NextButton = () => {
    const regex = /\S+@\S+\.\S+/;
    if (!fname && !lname && !email && !password) {
      setErrors((pre) => ({
        ...pre,
        fnameErr: "err",
        lnameErr: "err",
        emailErr: "err",
        passwordErr: "err",
      }));
    }
    if (fname.length < 2) {
      setErrors((pre) => ({ ...pre, fnameErr: "err" }));
    } else {
      setErrors((pre) => ({ ...pre, fnameErr: "" }));
    }
    if (lname.length < 3) {
      setErrors((pre) => ({ ...pre, lnameErr: "err" }));
    } else {
      setErrors((pre) => ({ ...pre, lnameErr: "" }));
    }
    if (password.length < 6) {
      setErrors((pre) => ({ ...pre, passwordErr: "err" }));
    } else {
      setErrors((pre) => ({ ...pre, passwordErr: "" }));
    }
    if (regex.test(email)) {
      setErrors((pre) => ({ ...pre, emailErr: "" }));
    } else {
      setErrors((pre) => ({ ...pre, emailErr: "err" }));
    }

    if (OK == "OK") {
      dispach({ type: "NEXTPAGE", value: true });
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
                  <div className={CpassErr == "err" ? "Cpass err" : "Cpass"}>
                    <input
                      type="password"
                      placeholder="Confrom Pass"
                      value={Cpass}
                      onChange={(e) =>
                        Inputhandel("Cpass", e.target.value, setFormdata)
                      }
                    />
                    <p>password is not match !</p>
                  </div>
                  <div className={dateErr ? "date err" : "date"}>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) =>
                        Inputhandel("date", e.target.value, setFormdata)
                      }
                    />
                    <p>bathday is required !</p>
                  </div>
                  <div className="City">
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) =>
                        Inputhandel("city", e.target.value, setFormdata)
                      }
                    />
                  </div>
                </div>
                <div className="gender">
                  <div className="malefemale">
                    <div className={gendarErr == "err" ? "male err" : "male"}>
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
                    <div
                      className={gendarErr == "err" ? "female err" : "female"}
                    >
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
                  <button
                    onClick={PreviusButton}
                    className={
                      changebtn ? "previusbtn changebtn" : "previusbtn"
                    }
                  >
                    {changebtn ? "Create" : "Previus"}
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
                  <button
                    onClick={NextButton}
                    className={OK == "OK" ? "nextBtn next" : "nextBtn"}
                  >
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
