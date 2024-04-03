import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Inputhandel from "../lib/InputHandel";
import { useNavigate } from "react-router-dom";
import PostData from "../lib/Post";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [activity, setActivity] = useState({
    activeBtn: "",
    loginError: "",
    passError: "",
    loginsucess: "",
  });
  const { email, password } = login;
  const { activeBtn, loginError, loginsucess } = activity;
  useEffect(() => {
    if (login.email.length > 4 && login.password.length > 5) {
      setActivity((previus) => ({ ...previus, activeBtn: "acctive" }));
    } else {
      setActivity((previus) => ({ ...previus, activeBtn: "" }));
    }
  }, [login]);
  useEffect(() => {
    const url: string = `http://localhost:3300/route/api/user/login`;
    (async () => {
      if (loginsucess == "OK") {
        const { token, userDitils } = await PostData(url, login);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userDitials", JSON.stringify(userDitils));

        navigate("/profile");
        console.log(token);
      }
    })();
  }, [login, loginsucess, navigate]);
  const LoginBtn = () => {
    if (activeBtn == "acctive") {
      //chack valid email
      const regex = /\S+@\S+\.\S+/;
      if (regex.test(email)) {
        setActivity((pre) => ({ ...pre, loginError: "", loginsucess: "OK" }));
        // alert("login")
      } else {
        setActivity((pre) => ({ ...pre, loginError: "Error" }));
        console.log("wrong email");
      }
    } else {
      alert("all fild are required !");
    }
  };
  return (
    <div>
      <div className="Login">
        <div className="logininfo">
          <div className="texts">
            {/* <h4>ouer web connect your firend.</h4> */}
            <p> shear your knolage shear your imotion</p>
          </div>
        </div>
        <div className="logincoun">
          <div className="loginfrom">
            <div className="loginfild">
              <div className={loginError == "Error" ? "email err " : "email"}>
                <input
                  type="email"
                  placeholder="@ email"
                  value={email}
                  onChange={(e) =>
                    Inputhandel("email", e.target.value, setLogin)
                  }
                />
                <p className="">! wrong email</p>
              </div>
              <div className="password ">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    Inputhandel("password", e.target.value, setLogin)
                  }
                />
                <p>! wrong password</p>
              </div>
              <button
                className={
                  activeBtn == "acctive" ? "logbtn acctive" : "logbtn "
                }
                onClick={LoginBtn}
              >
                Login
              </button>
              <div className="subsecgment">
                <button className="logcre">
                  <Link to={"/signup"}>Create account</Link>
                </button>
                <h4>Forgate password?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
