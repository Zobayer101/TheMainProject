import { AppContex } from "../../lib/Reducher";
import { useContext } from "react";

const BgImage = () => {
  const {
    state: { bgimage },
    dispach,
    } = useContext(AppContex);
  return (
    <div
      className={bgimage ? "backgroundCountuner" : "backgroundCountuner OFF"}
    >
      <div className="changeBG">Change BG</div>
      <div
        className="img1"
        onClick={() => dispach({ type: "SETIMGE", value: "image1" })}
      >
        img1
      </div>
      <div
        className="img2"
        onClick={() => dispach({ type: "SETIMGE", value: "image2" })}
      >
        img2
      </div>
      <div
        className="img3"
        onClick={() => dispach({ type: "SETIMGE", value: "image3" })}
      >
        img3
      </div>
      <div
        className="img4"
        onClick={() => dispach({ type: "SETIMGE", value: "image4" })}
      >
        img4
      </div>
    </div>
  );
};

export default BgImage;
