import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContex } from "../lib/Reducher";
const Signup = () => {
  const {
    dispach,
    state: { nextpage },
  } = useContext(AppContex);
  console.log(typeof dispach);
  return (
    <div>
      <div className="signpuCon">
        <div className="signupbox">
          <div className={nextpage ? "mainFrom " : "mainFrom gonext"}>
            <div className="firstPart">
              <div className="intropage2nd">
                <div className="threeinput">
                  <input type="password" placeholder="Confrom Pass" />

                  <input type="date" />
                  <input type="text" placeholder="City" />
                </div>
                <div className="gender">
                  <div className="malefemale">
                    <div className="male">
                      <label htmlFor="male">Male</label>
                      <input type="radio" name="gendar" />
                    </div>
                    <div className="female">
                      <label htmlFor="female">Female</label>
                      <input type="radio" name="gendar" />
                    </div>
                  </div>
                  <button
                    onClick={() => dispach({ type: "NEXTPAGE", value: false })}
                    className="previusbtn"
                  >
                    Previus
                  </button>
                </div>
              </div>
            </div>
            <div className="scoundPart">
              <div className="intropage1st">
                <div className="inp">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                  <input type="email" placeholder="@ email" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="Ihave">
                  <button
                    onClick={() => dispach({ type: "NEXTPAGE", value: true })}
                    className="nextBtn"
                  >
                    Next
                  </button>
                  <h4>
                    <Link to={"/login"}>I have a account?</Link>
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
