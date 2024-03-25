import { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import Inputhandel from "../lib/InputHandel";
const Login = () => {
  
  const [login, setLogin] = useState({ email: "", password: "" });
  const [activity,setActivity]=useState({activeBtn:"",loginError:"",passError:"" })
  const { email, password } = login;
  const { activeBtn,loginError} = activity;
  useEffect(() => {
    if ((login.email.length > 4) && (login.password.length > 5)) {
     
      setActivity((previus) => ({ ...previus, activeBtn:"acctive" }));
    } else {
      setActivity((previus) => ({ ...previus, activeBtn:"" }));
      
    }
  }, [login])
  
  const LoginBtn = () => {
    if (activeBtn == "acctive") {
      //chack valid email
      const regex=/\S+@\S+\.\S+/;
      if (regex.test(email)) {
        
        setActivity((pre) => ({ ...pre, loginError: "" }));
        console.log("login btn");
      } else {
        setActivity((pre) => ({ ...pre, loginError: "Error" }));
        console.log('wrong email');
      }
    } else {
      alert("all fild are required !");
    }
  }
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
                  onChange={(e) => Inputhandel("password", e.target.value,setLogin)}
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
