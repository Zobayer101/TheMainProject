import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="Login">
        <div className="logininfo">
          <div className="texts">
            <h4>ouer web connect your firend.</h4>
            <h4> shear your knolage shear your imotion</h4>
          </div>
        </div>
        <div className="logincoun">
          <div className="loginfrom">
            <div className="loginfild">
              <input type="text" placeholder="Enter your email" />
              <input type="password" placeholder="Password" />
              <button className="logbtn">Login</button>
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
