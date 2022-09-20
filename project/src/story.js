import Daily from "./Daily";
import "./App.css";
import {useState} from "react";
function Story() {
  let [featherCnt, setFeatherCnt] = useState(0);
  return (
    <div className="container">
      <div className="c1image">
        <img className="banner" alt="banner" src="img/banner.jpg" />
        <Daily></Daily>
      </div>
      <div className="featherBox">
        <img
          className="feather"
          alt="banner"
          src="img/feather.png"
          onClick={() => {
            setFeatherCnt(featherCnt + 1);
          }}
        />
        {featherCnt}
      </div>
    </div>
  );
}

export default Story;
