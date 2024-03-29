
import nophoto from "../../assets/img/npphoto.jpg";

const Sussagesd = () => {
  return (
    <div className="sussageCoun">
      <div className="mypro">
        <div className="img">
          <img src={nophoto} alt="nophoto" />
          <p>mdzobayer</p>
        </div>
        <div className="switch">switch</div>
      </div>
      <div className="sussageedfor">
        sussaged for you
        <p>see all </p>
      </div>
      <div className="neibar">
        <div className="imgs">
          <img src={nophoto} alt="" /><p>naibar name</p>
        </div>
        <div className="fllow">follow</div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default Sussagesd;
