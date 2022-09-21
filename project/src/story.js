import Daily from "./Daily";
import "./App.css";
function Story({inputTitle, inputContent}) {
  return (
    <div className="container">
      <div className="c1image">
        <img className="banner" alt="banner" src="img/banner.jpg" />
        <Daily inputTitle={inputTitle} inputContent={inputContent}></Daily>
      </div>
    </div>
  );
}

export default Story;
